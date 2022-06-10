import { useEffect } from 'react';

const OVERFLOW_HIDDEN_CLASS = 'Overflow--hidden';

export const useBodyOverflowHidden = () => {
  useEffect(() => {
    document.body.classList.add(OVERFLOW_HIDDEN_CLASS);

    return () => {
      document.body.classList.remove(OVERFLOW_HIDDEN_CLASS);
    };
  }, []);
};
