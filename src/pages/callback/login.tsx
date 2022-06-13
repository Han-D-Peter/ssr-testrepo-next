import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginCallback = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
    router.push('/');
  }, [router]);

  return <h1>Loading...</h1>;
};

export default LoginCallback;
