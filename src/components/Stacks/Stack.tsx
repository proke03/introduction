import { ReactNode, useRef } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useOnScroll } from '@/hooks';

export default function Stack(props: { type: string }) {
  const { type } = props;
  const ref = useRef(null);
  useOnScroll({
    ref,
  });

  return (
    <StyledWrapper ref={ref}>
      <span className="section__icon-wrapper">
        <Image src="/icons/icon_html.png" alt="html icon" width={64} height={64} />
      </span>
      <div className="section__content">
        <h4>{titles[type]}</h4>
        <p>
          {contents[type]}
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;

  @media (max-width: 767px) {
    padding: 0;
  }

  span.section__icon-wrapper{
    margin-right: 30px;
    width: 64px;
    height: 64px;
  }

  div.section__content{
    width: calc(100% - 124px);
    word-break: keep-all;

    @media (max-width: 767px) {
      width: 100%;
    }

    h4{
      margin-bottom: 12px;
      font-size: 1.25rem;
      font-weight: 700;
    }

    p{
      width: 100%;
      span{
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`;

const titles: {[key: string]: string} = {
  html: 'HTML/CSS',
  javascript: 'JAVASCRIPT',
  framework: 'FRAMEWORK / LIBRARY',
  backend: 'BACK-END / INFRA',
};

const contents: {[key: string]: ReactNode} = {
  html: (
    <>
      <span>ㆍ</span>
      구조적인 마크업 설계 및 구현
      <br />
      <span>ㆍ</span>
      Scss와 같은 CSS Preprocessor 사용
      <br />
      <span>ㆍ</span>
      <span>반응형</span>
      {' '}
      적용
      <br />
      <span>ㆍ</span>
      크로스 브라우징
      <br />
      <span>ㆍ</span>
      Styled-Components와 같은
      <span>CSS-in-JS 라이브러리</span>
      {' '}
      사용
      <br />
      <span>ㆍ</span>
      UI 프레임워크(MUI,
      <span>Tailwind CSS</span>
      ) 이해 및 사용
      <br />
    </>
  ),
  javascript: (
    <>
      <span>ㆍ</span>
      <span>ES6</span>
      {' '}
      이상 문법 적극 사용
      <br />
      <span>ㆍ</span>
      <span>타입스크립트</span>
      {' '}
      사용
      <br />
    </>
  ),
  framework: (
    <>
      <span>ㆍ</span>
      React functional component
      <span>라이프사이클 이해</span>
      <br />
      <span>ㆍ</span>
      Next.js로
      <span>SSR 구현 경험</span>
      <br />
      <span>ㆍ</span>
      모듈 단위 라우팅 구조를 설계하고
      <span>Lazy Loading을 이용해 초기 로딩 속도를 개선</span>
      <br />
      <span>ㆍ</span>
      Flux 패턴 기반
      <span>상태 관리 라이브러리</span>
      (
      <span>Redux</span>
      , Recoil, Zustand)를 사용
      <br />
      <span>ㆍ</span>
      GraphQL로 풀스택 사이드 프로젝트를 진행하며,
      <span>BFF 간접 경험</span>
      <br />
    </>
  ),
  backend: (
    <>
      <span>ㆍ</span>
      Apollo-Server-Express로 GraphQL의 Query, Mutation, Resolver 작성
      <br />
      <span>ㆍ</span>
      Docker 이미지를 빌드하고 docker-compose.yml을 작성 경험
      <br />
      <span>ㆍ</span>
      AWS Lightsail, Cloudflare R2, Vercel을 사용하여 서비스를 배포하고 운영 중
      <br />
    </>
  ),
};
