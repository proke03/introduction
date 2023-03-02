import Head from 'next/head';
import Header from '@/components/Header';
import Cover from '@/components/Cover';
import Introduction from '@/components/Introduction';
import Stacks from '@/components/Stacks';
import Portfolio from '@/components/Portfolio/Portfolio';
import CareerEducation from '@/components/CareerEducation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>프론트엔드 개발자 장민 기술 이력서</title>
        <meta name="description" content="안녕하세요, 프론트엔드 개발자 장민입니다." />
        <meta name="author" content="장민" />
        <meta property="og:title" content="프론트엔드 개발자 장민" />
        <meta property="og:description" content="안녕하세요, 프론트엔드 개발자 장민입니다." />
        <meta property="og:image" content="https://user-images.githubusercontent.com/19148682/221340391-62225fdd-606b-4212-a19a-1e7f026c3102.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <Header />
        <Cover />
        <Introduction />
        <Stacks />
        <Portfolio />
        <CareerEducation />
        <Footer />
      </main>
    </>
  );
}
