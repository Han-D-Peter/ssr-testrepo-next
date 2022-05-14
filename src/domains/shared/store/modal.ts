import create from 'zustand';

type ModalStore = {
  showModal: boolean;
  showOnModal: () => void;
  showOffModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  showOnModal: () => set((state) => ({ showModal: true })),
  showOffModal: () => set((state) => ({ showModal: false })),
}));
