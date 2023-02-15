import styled from '@emotion/styled';

export default function CareerEducation() {
  return(
    <StyledWrapper>
      <p>감사합니다 :)</p>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  height: 97.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #333333;

  p{
    font-family: 'Nanum Gothic';
    font-size: 0.8rem;
  }
`;
