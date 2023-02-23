import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { themeState } from '@/states';

export default function Header() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark');
    } else {
      setTheme('Light');
    }
  };

  return (
    <StyledWrapper>
      <button type="button" onClick={toggleTheme}>{theme}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin-right: 24px;
    width: 69px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #f1c50e;
    color: #fff;
  }
`;
