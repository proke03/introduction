import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <RecoilRoot>
      <AnyComponent {...pageProps} />
    </RecoilRoot>
  );
}
