import { gql } from "@apollo/client";
import create from "zustand";
import { Chat, ChatSession } from "../generated";
import { client } from "../modules/apollo";
import { useUserStore } from "./user";

type SPESIFIC_CHAT_FILTER = "read" | "unread";

interface ChatState {

  conversationId?: string;
  setConversationId: (conversationId: string, target: string) => void;
  conversations: Chat[];
  setConversations: (conversations: Chat[]) => void;
  addConversation: (conversation: Chat) => void;

  registerCalled: boolean;
  sessions: ChatSession[];
  sendConversation: (
    toId: string,
    content: string,
    cb: (r: boolean) => void
  ) => void;
  lastChatMap: Record<string, Chat>;
  setLastChatMap: (by: Record<string, Chat>) => void;
  getSession: (type: string) => ChatSession | undefined;
  setSessions: (chats: ChatSession[]) => void;
  addSessions: (chats: ChatSession) => void;


  chats: Chat[];
  getSpesificChats: (type: SPESIFIC_CHAT_FILTER) => Chat[];
  setChats: (chats: Chat[]) => void;
  addChats: (chats: Chat) => void;
  register: () => void;

  fetchSessions: () => Promise<void>;
  fetchSession: (id: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  registerCalled: false,

  conversationId: undefined,

  setConversationId: async (conversationId: string, targetId: string) => {



    await client.mutate({
      mutation: gql`
      mutation FindManyChats($fr: String!) {}
    
    `, variables: {}
    })

    set({ conversationId });

  },
  conversations: [],
  setConversations: (conversations: Chat[]) => set({ conversations }),
  addConversation: (conversation: Chat) => {
    const conversations = get().conversations;
    set({ conversations: [...conversations, conversation] });
  },

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
  chats: [],
  setLastChatMap: (lastChatMap) => set(() => ({ lastChatMap })),

  getSession: (id) => {
    return get().sessions.find((session) => session.id === id);
  },
  setSessions: (sessions) => set(() => ({ sessions })),
  addSessions: (sessions) =>
    set(() => ({ sessions: [...get().sessions, sessions] })),
  getSpesificChats: (type) => {
    if (type == "read")
      return get().chats.filter((chat) => !!chat.readAt);

    return get().chats.filter((chat) => chat.readAt == null);
  },
  setChats: (chats: Chat[]) =>
    set(() => ({ chats })),
  addChats: (chats: Chat) =>
    set(() => ({ chats: [...get().chats, chats] })),

  fetchSessions: async () => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { data: { findManyChatSession } = {} } = await client.query<{
      findManyChatSession: ChatSession[];
    }>({
      query: gql`
        query FindManyChatSession($where: ChatSessionWhereInput) {
          findManyChatSession(where: $where) {
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
          toId: {
            equals: userId,
          },
        },
      },
    });

    if (findManyChatSession) {
      set({ sessions: findManyChatSession });
    }
  },

  fetchSession: async (id: string) => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { data: { findFirstChatSession } = {} } = await client.query<{
      findFirstChatSession: ChatSession;
    }>({
      query: gql`
        query findFirstChatSession(
          $where: ChatSessionWhereInput
        ) {
          findFirstChatSession(where: $where) {
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
      findFirstChatSession &&
      !get().sessions.find(
        (session) => session.id == findFirstChatSession.id
      )
    ) {
      set({ sessions: [...get().sessions, findFirstChatSession] });
    }
  },

  register: async () => {
    if (get().registerCalled) return;

    await get().fetchSessions();
    await client
      .subscribe<{ chatSubscribe: Chat }>({
        query: gql`
          subscription Subscription {
            chatSubscribe {
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
        const { chatSubscribe } = data || {};

        if (!chatSubscribe) return;

        if (
          !get().sessions.find((e) => e.id == chatSubscribe?.chatSessionId)
        ) {
          get().fetchSession(chatSubscribe.fromId);
        }

        get().addChats(chatSubscribe);

        get().setLastChatMap({
          ...get().lastChatMap,
          [chatSubscribe.fromId]: chatSubscribe,
        });

        set({ registerCalled: true });
      });

    console.log("[Chat] Handler registered");
  },
}));
