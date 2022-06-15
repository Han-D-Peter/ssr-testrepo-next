import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useOnUser } from 'src/domains/shared/hooks/useOnUser';

const LoginCallback = () => {
  const router = useRouter();
  const [_, loginWithTokens] = useOnUser();

  useEffect(() => {
    if (router.isReady) {
      const { token, refreshtoken: refreshToken } = router.query;
      loginWithTokens({ token, refreshToken });

      router.push('/');
    }
  }, [router]);

  return <h1>Loading...</h1>;
};

export default LoginCallback;
