export const getRefreshTokenFromStorage = () => {
  return localStorage.getItem('refreshToken');
};
