import { gql } from "@apollo/client";
import create from "zustand";
import { PrivateChat, PrivateChatSession } from "../generated";
import { client } from "../modules/apollo";
import { useUserStore } from "./user";

type SPESIFIC_CHAT_FILTER = "read" | "unread";

interface PrivateChatState {
  registerCalled: boolean;
  sessions: PrivateChatSession[];
  getConversation: (fromId: string) => PrivateChat[];
  sendConversation: (
    toId: string,
    content: string,
    cb: (r: boolean) => void
  ) => void;
  lastChatMap: Record<string, PrivateChat>;
  setLastChatMap: (by: Record<string, PrivateChat>) => void;
  getSession: (type: string) => PrivateChatSession | undefined;
  setSessions: (privateChats: PrivateChatSession[]) => void;
  addSessions: (privateChats: PrivateChatSession) => void;

  privateChats: PrivateChat[];
  getSpesificPrivateChats: (type: SPESIFIC_CHAT_FILTER) => PrivateChat[];
  setPrivateChats: (privateChats: PrivateChat[]) => void;
  addPrivateChats: (privateChats: PrivateChat) => void;
  register: () => void;

  fetchSessions: () => Promise<void>;
  fetchSession: (id: string) => Promise<void>;
}

export const usePrivateChatStore = create<PrivateChatState>((set, get) => ({
  registerCalled: false,
  sendConversation: (to, content, cb) => {
    client
      .mutate({
        mutation: gql`
          mutation Mutation(
            $to: String!
            $content: String!
            $type: ContentType!
          ) {
            sendChat(to: $to, content: $content, type: $type) {
              id
            }
          }
        `,
        variables: {
          to,
          content,
          type: "TEXT",
        },
      })
      .then(() => cb(true))
      .catch(() => cb(false));
  },
  lastChatMap: {},
  sessions: [],
  privateChats: [],
  setLastChatMap: (lastChatMap) => set(() => ({ lastChatMap })),
  getConversation: (fromId) => {
    const userId = useUserStore.getState().user?.id;
    return get().privateChats.filter((chat) => {
      return chat.fromId === fromId && chat.toId === userId;
    });
  },
  getSession: (id) => {
    return get().sessions.find((session) => session.id === id);
  },
  setSessions: (sessions) => set(() => ({ sessions })),
  addSessions: (sessions) =>
    set(() => ({ sessions: [...get().sessions, sessions] })),
  getSpesificPrivateChats: (type) => {
    if (type == "read")
      return get().privateChats.filter((chat) => !!chat.readAt);

    return get().privateChats.filter((chat) => chat.readAt == null);
  },
  setPrivateChats: (privateChats: PrivateChat[]) =>
    set(() => ({ privateChats })),
  addPrivateChats: (privateChats: PrivateChat) =>
    set(() => ({ privateChats: [...get().privateChats, privateChats] })),

  fetchSessions: async () => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { data: { findManyPrivateChatSession } = {} } = await client.query<{
      findManyPrivateChatSession: PrivateChatSession[];
    }>({
      query: gql`
        query FindManyPrivateChatSession($where: PrivateChatSessionWhereInput) {
          findManyPrivateChatSession(where: $where) {
            id
            toId
            fromId
            from {
              id
              name
              profilePicturePath
            }
            lastReadAt
            lastChatId
            lastChat {
              content
            }
          }
        }
      `,
      variables: {
        where: {
          toId: {
            equals: userId,
          },
        },
      },
    });

    if (findManyPrivateChatSession) {
      set({ sessions: findManyPrivateChatSession });
    }
  },

  fetchSession: async (id: string) => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { data: { findFirstPrivateChatSession } = {} } = await client.query<{
      findFirstPrivateChatSession: PrivateChatSession;
    }>({
      query: gql`
        query findFirstPrivateChatSession(
          $where: PrivateChatSessionWhereInput
        ) {
          findFirstPrivateChatSession(where: $where) {
            id
            toId
            fromId
            to {
              id
              name
              profilePicturePath
            }
            from {
              id
              name
              profilePicturePath
            }
            lastReadAt
            lastChatId
          }
        }
      `,
      variables: {
        where: {
          fromId: {
            equals: userId,
          },
          toId: {
            equals: id,
          },
        },
      },
    });

    if (
      findFirstPrivateChatSession &&
      !get().sessions.find(
        (session) => session.id == findFirstPrivateChatSession.id
      )
    ) {
      set({ sessions: [...get().sessions, findFirstPrivateChatSession] });
    }
  },

  register: async () => {
    if (get().registerCalled) return;

    await get().fetchSessions();
    await client
      .subscribe<{ privateChatSubscribe: PrivateChat }>({
        query: gql`
          subscription Subscription {
            privateChatSubscribe {
              id
              contentType
              content
              toId
              fromId
              readAt
            }
          }
        `,
      })
      .subscribe(({ data }) => {
        const { privateChatSubscribe } = data || {};

        if (!privateChatSubscribe) return;

        if (
          !get().sessions.find((e) => e.fromId == privateChatSubscribe?.fromId)
        ) {
          get().fetchSession(privateChatSubscribe.fromId);
        }

        get().addPrivateChats(privateChatSubscribe);

        get().setLastChatMap({
          ...get().lastChatMap,
          [privateChatSubscribe.fromId]: privateChatSubscribe,
        });

        set({ registerCalled: true });
      });

    console.log("[PrivateChat] Handler registered");
  },
}));
