import { useRef } from 'react';
import styled from '@emotion/styled';
import { useOnScroll } from '@/hooks';
import Stack from './Stack';

export default function Stacks() {
  const ref = useRef(null);
  useOnScroll({ ref, animationName: 'fade' });

  return (
    <StyledWrapper>
      <div className="section__container">
        <h3 ref={ref}>Tech Stacks</h3>
        <div className="section__contents">
          <Stack type="html" />
          <Stack type="javascript" />
          <Stack type="framework" />
          <Stack type="backend" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};

  div.section__container{
    margin: 0 auto 60px auto;
    max-width: 1140px;
    display: flex;
    flex-direction: column;

    h3{
      margin-top: 90px;
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      vertical-align: middle;

      @media (max-width: 1085px) {
        margin-top: 30px;
      }
    }
  
    div.section__contents{
      margin: 23px 0 58px;
      height: 606px;
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 5px));
      grid-gap: 10px;

      @media (max-width: 1085px) {
        margin: 42px 0 58px;
        display: flex;
        flex-direction: column;
      }
    }
  }

`;
