import { useRef } from "react";
import styled from "@emotion/styled";
import { useOnScroll } from "@/hooks";

export default function Stack(props: Record<string, string>){
  const { type } = props;
  const ref = useRef(null);
  useOnScroll({
    ref, 
    animationName: (type==='html' || type=== 'framework') ? 'slide_ltr' : 'slide_rtl'
  });

  return(
    <StyledWrapper ref={ref}>
      <img src="icons/icon_html.png" alt="html icon" />
      <div className="section__content">
        <h5>{titles.get(type)}</h5>
        <p>
          {contents(type)}
        </p>
      </div>
    </StyledWrapper>
  )
}

const titles = new Map();
titles.set('html', 'HTML/CSS');
titles.set('javascript', 'JAVASCRIPT');
titles.set('framework', 'FRAMEWORK / LIBRARY');
titles.set('backend', 'BACK-END / INFRA');

const contents = (type: string) => {
  switch(type) {
    case 'html':
      return (
        <>
          <span>ㆍ</span>구조적인 마크업 설계 및 구현<br />
          <span>ㆍ</span>Scss와 같은 CSS Preprocessor 사용<br />
          <span>ㆍ</span><span>반응형</span> 적용<br />
          <span>ㆍ</span>크로스 브라우징<br />
          <span>ㆍ</span>Styled-Components와 같은 <span>CSS-in-JS 라이브러리</span> 사용<br />
          <span>ㆍ</span>UI 프레임워크(MUI, <span>Tailwind CSS</span>) 이해 및 사용<br />
        </>
      )
    case 'javascript':
      return (
        <>
          <span>ㆍ</span><span>ES6</span> 이상 문법 적극 사용<br />
          <span>ㆍ</span><span>타입스크립트</span> 사용<br />
        </>
      )
    case 'framework':
      return (
        <>
          <span>ㆍ</span>React functional component <span>라이프사이클 이해</span><br />
          <span>ㆍ</span>Next.js로 <span>SSR 구현 경험</span><br />
          <span>ㆍ</span>모듈 단위 라우팅 구조를 설계하고 <span>Lazy Loading을 이용해 초기 로딩 속도를 개선</span><br />
          <span>ㆍ</span>Flux 패턴 기반 <span>상태 관리 라이브러리</span>(<span>Redux</span>, Recoil, Zustand)를 사용<br />
          <span>ㆍ</span>GraphQL로 풀스택 사이드 프로젝트를 진행하며, <span>BFF 간접 경험</span><br />
        </>
      )
    case 'backend':
      return (
        <>
          <span>ㆍ</span>Apollo-Server-Express로 GraphQL의 Query, Mutation, Resolver 작성<br />
          <span>ㆍ</span>Docker 이미지를 빌드하고 docker-compose.yml을 작성 경험<br />
          <span>ㆍ</span>AWS Lightsail, Cloudflare R2, Vercel을 사용하여 서비스를 배포하고 운영 중<br />
        </>
      )
  }
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px;

  img{
    margin-right: 30px;
    width: 64px;
    height: 64px;
  }

  div.section__content{
    width: 100%;

    h5{
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
    }

    p{
      span{
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`