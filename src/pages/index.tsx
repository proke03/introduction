import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import styled from '@emotion/styled';
import Cover from '@/components/Cover';
import Introduction from '@/components/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header></header>
        <Cover />
        <Introduction />
      </main>
    </>
  )
}
