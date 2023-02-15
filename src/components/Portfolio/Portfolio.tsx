import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  const imgSize = useRef(2);

  const moveSlide = (i: number) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <StyledWrapper>
      <div className="section__container-button">
        <button aria-label="button previous portfolio" type="button" onClick={() => { moveSlide(-1); }}>
          <svg viewBox="0 0 477.175 477.175">
            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />
          </svg>
        </button>
      </div>
      <div className="section__carousel">
        <h3>Portfolio</h3>
        <div className="section__carousel-window">
          <div className="section__carousel-flexbox" style={style}>
            <div className="section__carousel-item">
              <div className="section__carousel-item-left">
                <Image src="/mint.webp" alt="icon portfolio mint" width={150} height={150} />
              </div>
              <div className="section__carousel-item-right">
                <h4>Mint</h4>
                <h5>게더타운, zep을 모티브로 한 2D 협업 메타버스 서비스</h5>
                <p>
                  ㆍ2023년 1월 6일 사내 오픈
                  <br />
                  ㆍ2023년 상반기 오픈 예정
                  <br />
                  ㆍ
                  <span>Typescript</span>
                  ,
                  {' '}
                  <span>React</span>
                  ,
                  {' '}
                  <span>Redux</span>
                  , Phaser3, HMTL, CSS,
                  {' '}
                  <span>Styled-Components</span>
                  <br />
                  ㆍ프론트엔드 3, 백엔드 1, 인프라 1, 디자인 1, 기획 1
                  <br />
                  ㆍ역할: 프론트엔드, 게임서버
                  <br />
                </p>
              </div>
            </div>
            <div className="section__carousel-item">
              <div className="section__carousel-item-left">
                <Image src="/starsound.webp" alt="icon portfolio starsound" width={150} height={150} />
              </div>
              <div className="section__carousel-item-right">
                <h4>별별소리</h4>
                <h5>관심사 기반 커뮤니티 서비스</h5>
                <p>
                  ㆍ2022년 12월 5일 오픈
                  <br />
                  ㆍFront-End
                  <br />
                  &nbsp;&nbsp;&nbsp;Javascript,
                  {' '}
                  <span>React</span>
                  , Zustand, Apollo Client, TailwindCSS
                  <br />
                  ㆍBack-End & Infra
                  <br />
                  &nbsp;&nbsp;&nbsp;Typescript, Express, Postgresql,
                  {' '}
                  <span>GraphQL</span>
                  , AWS Lightsail
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__container-button">
        <button aria-label="button  portfolio" type="button" onClick={() => { moveSlide(1); }}>
          <svg transform="scale(-1, 1)" viewBox="0 0 477.175 477.175">
            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  height: 481px;
  display: flex;
  flex-direction: row;
  background-color: #f1c50e;

  div.section__container-button{
    display: flex;
    align-items: center;

    button{
      background-color: transparent;
      border: none;

      svg{
        width: 40px;
        height: 40px;
      }
    }
  }

  div.section__carousel{
    margin: 0 auto 60px auto;
    width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
      margin: 32px auto 0;
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
    }

    div.section__carousel-window{
      width: 968px;
      height: 374px;
      overflow: hidden;
      div.section__carousel-flexbox{
        display: flex;
        transition: all 0.3s ease-out;
        div.section__carousel-item{
          margin: 24px auto 8px;
          width: 968px;
          height: 374px;
          display: flex;
    
          div.section__carousel-item-left{
            width: 198.13px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
    
          div.section__carousel-item-right{
            width: 679.86px;
            padding: 30px;
            color: white;
    
            h4{
              margin: 0;
              font-size: 2.25rem;
              font-weight: 700;
              line-height: 1.2;
            }
    
            h5{
              margin: 0;
              font-size: 1.25rem;
              font-weight: 400;
              letter-spacing: 2px;
              line-height: 1.2;
            }
    
            p{
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.8;
            }
          }
        }
      }
    }
    

  
    div.section__contents{
      margin: 23px 0 58px;
      height: 606px;
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 5px));
      grid-gap: 10px;
    }
  }

`;
