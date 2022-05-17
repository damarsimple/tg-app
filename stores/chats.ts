import { gql } from "@apollo/client";
import create from "zustand";
import { PrivateChat } from "../generated";
import { client } from "../modules/apollo";

interface PrivateChatState {
    privateChats: PrivateChat[];
    setPrivateChats: (privateChats: PrivateChat[]) => void;
    addPrivateChats: (privateChats: PrivateChat) => void;
    register: () => void;
}

const usePrivateChatStore = create<PrivateChatState>((set, get) => ({
    privateChats: [],
    setPrivateChats: (privateChats: PrivateChat[]) =>
        set(() => ({ privateChats })),
    addPrivateChats: (privateChats: PrivateChat) =>
        set(() => ({ privateChats: [...get().privateChats, privateChats] })),
    register: async () => {
        await client
            .subscribe<{ truths: string }>({
                query: gql`
          subscription Subscription {
            truths
          }
        `,
            })
            .subscribe((e) => {
                console.log(e.data);
                // addNotification(e.data.truths);
            });
    },
}));
