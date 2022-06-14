import { useCallback, useState } from 'react';
import { clearAuthToken, setAuthToken } from '../api/client';
import { useUserStore } from '../store/user';

type userOnUserResult = [boolean, ({ token, refreshToken }: TokenSet) => void, () => void];

interface TokenSet {
  token: string;
  refreshToken: string;
}

export const useOnUser = (): userOnUserResult => {
  const { isLoggedIn, login, logout } = useUserStore();

  const setLoginWithTokens = ({ token, refreshToken }: TokenSet) => {
    setAuthToken(token);
    localStorage.setItem('refreshToken', refreshToken);
    login({ userName: 'peter', imgSrc: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg' });
  };

  const setLogout = () => {
    clearAuthToken();
    localStorage.removeItem('refreshToken');
    logout();
  };

  return [isLoggedIn, setLoginWithTokens, setLogout];
};
