import { gql } from "@apollo/client";
import create from "zustand";
import {
  Chat,
  ChatSession,
  User,
  Maybe,
  findManyNotificationArgs,
} from "../generated";
import { client } from "../modules/apollo";
import { useUserStore } from "./user";

type SPESIFIC_CHAT_FILTER = "read" | "unread";

type SimpleCB = () => void;

interface ChatState {
  onNewConversation: SimpleCB;
  setOnNewConversation: (by: SimpleCB) => void;

  chatUsers: Record<string, User>;
  getUsers: (ids: string[], includeMe?: boolean) => Maybe<User>[];

  conversationId?: string;
  setConversationId: (conversationId: string) => void;
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
  onNewConversation: () => {},
  setOnNewConversation: (by: SimpleCB) => set({ onNewConversation: by }),
  chatUsers: {},
  getUsers(idsA, includeMe) {
    const ids = Array.from(new Set([...idsA]));

    const user = useUserStore.getState().user;

    if (!user) return [];

    const notExists: string[] = [];
    const original: Record<string, User> = {
      [user.id]: user,
      ...get().chatUsers,
    };

    for (const id of ids) {
      if (user.id == id) continue;

      if (!(id in original)) {
        notExists.push(id);
      }
    }

    if (notExists.length !== 0) {
      client
        .query<{
          findManyUser: User[];
        }>({
          query: gql`
            query FindManyUser($where: UserWhereInput) {
              findManyUser(where: $where) {
                id
                name
                profilePicturePath
              }
            }
          `,
          variables: {
            where: {
              id: {
                in: notExists,
              },
            },
          },
        })
        .then(({ data: { findManyUser } = {} }) => {
          set({
            chatUsers: {
              ...original,
              ...findManyUser?.reduce((acc, cur) => {
                return {
                  ...acc,
                  [cur.id]: cur,
                };
              }, {} as Record<string, User>),
            },
          });
        });
    }

    const rets = [];

    for (const id of ids) {
      if (id == user.id && !includeMe && ids.length > 1) {
        continue;
      }
      rets.push(original[id]);
    }

    return rets;
  },

  conversationId: undefined,

  setConversationId: async (conversationId: string) => {
    if (!conversationId) {
      set({ conversationId: undefined, conversations: [] });
    }

    const { data: { findManyChat } = {} } = await client.query<{
      findManyChat: Chat[];
    }>({
      query: gql`
        query FindManyChat(
          $where: ChatWhereInput
          $orderBy: [ChatOrderByWithRelationInput]
        ) {
          findManyChat(where: $where, orderBy: $orderBy) {
            id
            content
            from {
              id
              name
            }
            fromId
            contentType
            readAt
            createdAt
            updatedAt
            chatSessionId
          }
        }
      `,
      variables: {
        where: {
          chatSessionId: {
            equals: conversationId,
          },
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      },
    });

    if (findManyChat) {
      set({ conversationId, conversations: findManyChat });
    }
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
    if (type == "read") return get().chats.filter((chat) => !!chat.readAt);

    return get().chats.filter((chat) => chat.readAt == null);
  },
  setChats: (chats: Chat[]) => set(() => ({ chats })),
  addChats: (chats: Chat) => set(() => ({ chats: [...get().chats, chats] })),

  fetchSessions: async () => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { data: { findManyChatSession } = {} } = await client.query<{
      findManyChatSession: ChatSession[];
    }>({
      query: gql`
        query FindManyChatSession(
          $orderBy: [ChatSessionOrderByWithRelationInput]
          $where: ChatSessionWhereInput
        ) {
          findManyChatSession(orderBy: $orderBy, where: $where) {
            id
            participantsIds
            lastReadAt
            createdAt
            updatedAt
          }
        }
      `,
      variables: {
        orderBy: [
          {
            updatedAt: "desc",
          },
        ],
        where: {
          participantsIds: {
            has: userId,
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
        query findFirstChatSession($where: ChatSessionWhereInput) {
          findFirstChatSession(where: $where) {
            id
            participantsIds
            lastReadAt
            lastChatId
          }
        }
      `,
      variables: {
        where: {
          id: {
            equals: userId,
          },
        },
      },
    });

    if (
      findFirstChatSession &&
      !get().sessions.find((session) => session.id == findFirstChatSession.id)
    ) {
      set({ sessions: [...get().sessions, findFirstChatSession] });
    }
  },

  register: async () => {
    if (get().registerCalled) return;

    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    console.log(userId);

    await get().fetchSessions();

    await client
      .subscribe<{ chatSubscribe: Chat }>({
        query: gql`
          subscription Subscription {
            chatSubscribe {
              id
              contentType
              content
              chatSessionId
              fromId
              readAt
            }
          }
        `,
      })
      .subscribe(({ data }) => {
        const { chatSubscribe } = data || {};

        if (!chatSubscribe) return;

        get().addChats(chatSubscribe);

        if (get().conversationId == chatSubscribe?.chatSessionId) {
          get().addConversation(chatSubscribe);
          if (get().onNewConversation) get().onNewConversation();
        }
        get().setLastChatMap({
          ...get().lastChatMap,
          [chatSubscribe.id]: chatSubscribe,
        });

        set({ registerCalled: true });
      });

    console.log("[Chat] Handler registered");
  },
}));
