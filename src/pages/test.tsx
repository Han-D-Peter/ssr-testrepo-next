import { useEffect } from 'react';
import client, { axios, setAuthToken } from 'src/domains/shared/api/client';
import { Header } from 'src/domains/shared/components';

const Test = () => {
  useEffect(() => {
    const token = window.sessionStorage.getItem('access-token');
    console.log(token);
    if (token) return setAuthToken(token);
  });
  return (
    <>
      <Header />
      <button
        onClick={async function () {
          console.log(axios.defaults.headers.common);
          const data = await client.get('/test');

          console.log(data);
        }}
      >
        test
      </button>
    </>
  );
};

export default Test;
