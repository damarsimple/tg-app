import create from "zustand";

interface NotificationState {
  setOpen: (by: boolean) => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

export const useDrawerStore = create<NotificationState>((set, get) => ({
  open: false,
  setOpen: (by) => set({ open: by }),

  handleDrawerClose: () => set({ open: false }),
  handleDrawerOpen: () => set({ open: true }),
}));
