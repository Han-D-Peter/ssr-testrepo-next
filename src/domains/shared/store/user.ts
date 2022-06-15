import create from 'zustand';

type User = {
  imgSrc?: string | undefined;
  userName: string;
};

type UserStore = {
  isLoggedIn: boolean;
  user: User;
  login: ({ userName, imgSrc }: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  user: {
    imgSrc: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    userName: 'Peter',
  },
  login: ({ userName, imgSrc }) => {
    if (imgSrc) {
      return set((state) => ({ ...state, isLoggedIn: true, user: { imgSrc, userName } }));
    }
    return set((state) => ({ ...state, isLoggedIn: true, user: { userName } }));
  },
  logout: () => set((state) => ({ ...state, isLoggedIn: false, user: undefined })),
}));
