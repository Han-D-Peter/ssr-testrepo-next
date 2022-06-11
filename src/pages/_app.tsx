import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from 'src/style/GlobalStyle';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
