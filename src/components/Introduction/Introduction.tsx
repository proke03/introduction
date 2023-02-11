import styled from '@emotion/styled';

export default function Introduction() {
  return(
    <StyledWrapper>
      <div className="section__container">
        <div className="section__title">
          <h2>INTRODUCTION</h2>
          <div className="section__title-bar" />
        </div>
        <div className="section__contents">
          <p className="section__content">
            <span>꾸준히 성장하기 위해 노력</span>합니다. 이를 위해, <br />
            1일 1커밋을 실천하고 있습니다. <span>데이터 시각화</span>에 
            관심이 많아서 리액트 차트 라이브러리 &nbsp;
            <span>recharts의 Collaborator</span>로 활동하고 있습니다. 
            다양한 오픈소스의 관련 이슈에 기여하며 <span>웹 접근성</span>과 
            <span>테스트 코드</span>를 공부하고 있습니다.
          </p>
          <p className="section__content"> 
            주어진 일을 처리하는 데 그치지 않고 <span>능동적</span>으로 
            일합니다. 3D 메타버스 게임 스튜디오를 만드는 
            팀에서 일하며 <span>2D 협업 메타버스 서비스를 
            제안</span>했습니다. OJT로 해당 프로젝트를 진행하여 가능성을 
            검증했고, 해당 프로젝트는 <span>현재 팀의 메인 
            프로젝트</span>가 되어 상반기 출시를 앞두고 있습니다.
          </p>
          <p className="section__content">
            효율적인 의사소통을 위해서 늘 고민합니다.
          </p>
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
    margin: 207px auto 60px auto;
    width: 1140px;
    
    div.section__title{
  
      h2{
        font-size: 2.25rem;
        font-weight: 600;
      }
  
      div.section__title-bar{
        display: block;
        width: 464px;
        height: 20px;
        background-color: #f1c50e;
      }
    }
  
    div.section__contents{
      margin: 94px 0 60px;
      display: grid;
      grid-template-columns: repeat(3, calc(33.3333% - 6.66667px));
      grid-gap: 10px;
  
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