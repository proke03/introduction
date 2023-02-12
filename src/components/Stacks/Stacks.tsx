import styled from '@emotion/styled';
import Stack from './Stack';

export default function Stacks() {
  return(
    <StyledWrapper>
      <div className="section__container">
        <h3>Tech Stacks</h3>
        <div className="section__contents">
          <Stack type="html" />
          <Stack type="javascript" />
          <Stack type="framework" />
          <Stack type="backend" />
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
    }
  }

`;
