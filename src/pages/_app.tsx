import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { themeState } from '@/states';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <RecoilRoot>
      <ThemeProviderWrapper>
        <AnyComponent {...pageProps} />
      </ThemeProviderWrapper>
    </RecoilRoot>
  );
}

function ThemeProviderWrapper({ children }: {children: React.ReactNode}) {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}

const lightTheme = {
  colors: {
    background: '#fff',
    text: '#000',
    primary: '#f1c50e',
  },
};

const darkTheme = {
  colors: {
    background: '#000',
    text: '#fff',
    primary: '#f1c50e',
  },
};
