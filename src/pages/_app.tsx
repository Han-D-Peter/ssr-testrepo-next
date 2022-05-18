import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { GlobalEditorStyle } from 'src/styles/GlobalEditorStyle';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global
        styles={css`
          ${emotionNormalize}
          ${GlobalEditorStyle}
        `}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
