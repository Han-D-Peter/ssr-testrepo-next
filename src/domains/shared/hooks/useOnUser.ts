import { useCallback, useState } from 'react';
import { clearAuthToken, setAuthToken } from '../api/client';

type userOnUserResult = [boolean, ({ token, refreshToken }: TokenSet) => void, () => void];

interface TokenSet {
  token: string;
  refreshToken: string;
}

export const useOnUser = (): userOnUserResult => {
  const [isLogin, setIsLogin] = useState(false);

  const loginWithTokens = ({ token, refreshToken }: TokenSet) => {
    setAuthToken(token);
    localStorage.setItem('refreshToken', refreshToken);
    setIsLogin(true);
  };

  const logout = () => {
    clearAuthToken();
    localStorage.removeItem('refreshToken');
    setIsLogin(false);
  };

  return [isLogin, loginWithTokens, logout];
};
