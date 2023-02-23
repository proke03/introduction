import styled from '@emotion/styled';

export default function Footer() {
  return (
    <StyledWrapper>
      <p>감사합니다 :)</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  height: 97.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background-color: #333333;

  p{
    font-family: 'Nanum Gothic';
    font-size: 0.8rem;
  }
`;
