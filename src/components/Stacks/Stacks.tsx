import styled from '@emotion/styled';
import icon_html from './imgs/icon_html.png';

export default function Stacks() {
  return(
    <StyledWrapper>
      <div className="section__container">
        <h3>Tech Stacks</h3>
        <div className="section__contents">
          <div className="section__stack">
            <img src="icons/icon_html.png" alt="html icon" />
            <div className="section__content">
              <h5>HTML/CSS</h5>
              <p>
              ㆍ구조적인 마크업 설계 및 구현<br />
              ㆍScss와 같은 CSS Preprocessor 사용<br />
              ㆍ<span>반응형</span> 적용<br />
              ㆍ크로스 브라우징<br />
              ㆍStyled-Components와 같은 <span>CSS-in-JS 라이브러리</span> 사용<br />
              ㆍUI 프레임워크(MUI, <span>Tailwind CSS</span>) 이해 및 사용<br />
              </p>
            </div>
          </div>
          <div className="section__stack">
            <img src="icons/icon_javascript.png" alt="html icon" />
            <div className="section__content">
              <h5>JAVASCRIPT</h5>
              <p>
              ㆍ<span>ES6</span> 이상 문법 적극 사용<br />
              ㆍ타입스크립트 사용<br />
              </p>
            </div>
          </div>
          <div className="section__stack">
            <img src="icons/icon_framework.png" alt="html icon" />
            <div className="section__content">
              <h5>FRAMEWORK / LIBRARY</h5>
              <p>
              ㆍReact functional component <span>라이프사이클 이해</span><br />
              ㆍNext.js로 <span>SSR 구현 경험</span><br />
              ㆍ모듈 단위 라우팅 구조를 설계하고 <span>Lazy Loading을 이용해 초기 로딩 속도를 개선</span><br />
              ㆍFlux 패턴 기반 <span>상태 관리 라이브러리</span>(<span>Redux</span>, Recoil, Zustand)를 사용<br />
              ㆍGraphQL로 풀스택 사이드 프로젝트를 진행하며, <span>BFF 간접 경험</span><br />
              </p>
            </div>
          </div>
          <div className="section__stack">
            <img src="icons/icon_backend.png" alt="html icon" />
            <div className="section__content">
              <h5>BACK-END / INFRA</h5>
              <p>
              ㆍApollo-Server-Express로 GraphQL의 Query, Mutation, Resolver 작성<br />
              ㆍDocker 이미지를 빌드하고 docker-compose.yml을 작성 경험<br />
              ㆍAWS Lightsail, Cloudflare R2, Vercel을 사용하여 서비스를 배포하고 운영 중<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  height: 854px;
  display: flex;
  flex-direction: column;

  div.section__container{
    margin: 0 auto 60px auto;
    width: 1140px;
    display: flex;
    flex-direction: column;
    
    h3{
      margin-top: 90px;
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
    }
  
    div.section__contents{
      margin: 23px 0 58px;
      height: 606px;
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 5px));
      grid-gap: 10px;
  
      div.section__stack{
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

          p::first-letter,
          span{
            font-size: 1rem;
            font-weight: 700;
          }
        }
      }

      p.section__content{
        padding: 30px 30px 30px 0;
        span{
          font-size: 1rem;
          font-weight: 700;
        }
      }
    }
  }

`;
