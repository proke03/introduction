import { useRef } from 'react';
import styled from '@emotion/styled';
import { useOnScroll } from '@/hooks';

export default function CareerEducation() {
  const careerTitleRef = useRef(null);
  useOnScroll({ ref: careerTitleRef });
  const careerLeftRef = useRef(null);
  useOnScroll({ ref: careerLeftRef });
  const careerRightRef = useRef(null);
  useOnScroll({ ref: careerRightRef });

  const educationTitleRef = useRef(null);
  useOnScroll({ ref: educationTitleRef });
  const educationLeftRef = useRef(null);
  useOnScroll({ ref: educationLeftRef });

  return (
    <StyledWrapper>
      <div className="section__container">
        <h2 ref={careerTitleRef}>Career</h2>
        <div className="section__contents">
          <div className="section__contents-left" ref={careerLeftRef}>
            <h3>Tmax Metaverse</h3>
            <p>Tmax 그룹 계열사</p>
            <p>2022.03~</p>
          </div>
          <div className="section__contents-right" ref={careerRightRef}>
            <p>
              <span>Mint 개발 (2022.04.15 ~ )</span>
              <br />
              프로젝트 주제 선정부터 시작하여, 체험 부스 공개
              이후인 10월 중순까지 주도적으로 프로젝트
              리드. 1월 사내 공개 후, voc 대응하며 이미지와
              json 데이터를 연동하는 인하우스 툴 개발 중.
            </p>
          </div>
        </div>
        <h2 ref={educationTitleRef}>Education & Experience</h2>
        <div className="section__contents">
          <div className="section__contents-left" ref={educationLeftRef}>
            <h3>국민대학교</h3>
            <p>컴퓨터공학과</p>
            <p>2016.03~2021.02</p>
          </div>
          <div className="section__contents-right" ref={careerRightRef}>
            <p>
              학부 시절, 게임 프로그래밍에 관심이 많아서
              프로젝트 중심 수업에서 게임 프로젝트를 진행했습니다.
              <br />
              <br />
              <span>오픈소스 소프트웨어 A+</span>
              <br />
              현업 게임프로그래머인 교수님의 코드 리뷰 100% 반영
              <br />
              <br />
              <span>게임 소프트웨어 A+</span>
              <br />
              수강생의 평가 70% 반영
              <br />
              <br />
              <span>캡스톤 프로젝트(졸업 작품) A+</span>
              <br />
            </p>
          </div>
        </div>
        <div className="section__contents">
          <div className="section__contents-left" ref={educationLeftRef}>
            <h3>이매지니어스</h3>
            <p>스타트업</p>
            <p>2019.03.19~2019.08.09</p>
          </div>
          <div className="section__contents-right" ref={careerRightRef}>
            <p>
              재학 중 스타트업 합류 제안을 받아서 일했던 경험이 있습니다.
              <br />
              유니티 게임 엔진으로 이미지 합성 애플리케이션의 신기능 개발 및 AR 애플리케이션 최적화를 진행했습니다.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};

  div.section__container{
    margin: 0 auto;
    width: 1140px;
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    word-break: keep-all;

    @media (max-width: 1199px) {
      width: 940px;
    }

    @media (max-width: 991px) {
      width: 720px;
    }

    @media (max-width: 767px) {
      width: 540px;
    }

    @media (max-width: 575px) {
      width: 340px;
    }
    
    h2{
      margin: 0 auto 0;
      font-size: 2.25rem;
      font-weight: 600;
    }
  
    div.section__contents{
      margin-top: 32px;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      
      div.section__contents-left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 90px;

        @media (max-width: 767px) {
          padding-left: 0;
        }

        h3{
          font-size: 1.875rem;
          line-height: 1.2;
        }

        p{
          font-size: 1rem;
          line-height: 1.8;
        }
      }

      div.section__contents-right{
        width: 100%;
        padding-left: 90px;

        @media (max-width: 767px) {
          padding-left: 0;
        }

        p{
          width: calc(100% - 180px);

          @media (max-width: 991px) {
            width: calc(100% - 90px);
          }

          @media (max-width: 767px) {
            width: 100%;
          }

          span{
            font-size: 1rem;
            font-weight: 700;
          }
        }
      }
    }

    div.section__contents:nth-of-type(odd){
      margin-bottom: 32px;
    }
  }

`;
