import { useRef } from 'react';
import styled from '@emotion/styled';
import { useOnScroll } from '@/hooks';

export default function CareerEducation() {
  const careerTitleRef = useRef(null);
  useOnScroll({ ref: careerTitleRef, animationName: 'fade' });
  const careerLeftRef = useRef(null);
  useOnScroll({ ref: careerLeftRef, animationName: 'slide_ltr' });
  const careerRightRef = useRef(null);
  useOnScroll({ ref: careerRightRef, animationName: 'slide_rtl' });

  const educationTitleRef = useRef(null);
  useOnScroll({ ref: educationTitleRef, animationName: 'fade' });
  const educationLeftRef = useRef(null);
  useOnScroll({ ref: educationLeftRef, animationName: 'slide_ltr' });

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
              Mint 개발 (2022.04.15 ~ )
              <br />
              프로젝트 주제 선정부터 시작하여, 체험 부스 공개
              이후인 10월 중순까지 주도적으로 프로젝트
              리드. 1월 사내 공개 후, voc 대응하며 이미지와
              json 데이터를 연동하는 인하우스 툴 개발 중.
            </p>
          </div>
        </div>
        <h2 ref={educationTitleRef}>Education</h2>
        <div className="section__contents">
          <div className="section__contents-left" ref={educationLeftRef}>
            <h3>국민대학교</h3>
            <p>컴퓨터공학과</p>
            <p>2016.03~2021.02</p>
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
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    word-break: keep-all;

    @media (max-width: 991px) {
      width: 100%;
    }
    
    h2{
      margin: 0 auto 0;
      font-size: 2.25rem;
      font-weight: 600;
    }
  
    div.section__contents{
      margin: 32px 0 60px;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      
      div.section__contents-left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 90px;

        h3{
          font-size: 1.875rem;
          line-height: 1.2;
        }

        p{
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.8;
        }
      }

      div.section__contents-right{
        width: 100%;
        padding-left: 90px;

        p{
          width: calc(100% - 180px);

          span{
            font-size: 1rem;
            font-weight: 700;
          }
        }
      }
    }
  }

`;
