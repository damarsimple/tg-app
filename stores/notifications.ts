import { gql } from "@apollo/client";
import create from "zustand";
import { Notification } from "../generated";
import { client } from "../modules/apollo";

interface NotificationState {
    notifications: Notification[];
    setNotifications: (notifications: Notification[]) => void;
    addNotification: (notification: Notification) => void;
    register: () => void;
}

const useNoticationStore = create<NotificationState>((set, get) => ({
    notifications: [],
    setNotifications: (notifications: Notification[]) =>
        set(() => ({ notifications })),
    addNotification: (notification: Notification) =>
        set(() => ({ notifications: [...get().notifications, notification] })),
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
