import create from 'zustand';

type User = {
  imgSrc?: string;
  userName: string;
};

type UserStore = {
  isLoggedIn: boolean;
  user: User | undefined;
  login: ({ userName, imgSrc }: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  user: undefined,
  login: ({ userName, imgSrc }) => {
    if (imgSrc) {
      return set((state) => ({ ...state, isLoggedIn: true, user: { imgSrc, userName } }));
    }
    return set((state) => ({ ...state, isLoggedIn: true, user: { userName } }));
  },
  logout: () => set((state) => ({ ...state, isLoggedIn: false, user: undefined })),
}));
