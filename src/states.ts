import { atom } from 'recoil';

type Theme = 'Light' | 'Dark';

const themeState = atom({
  key: 'themeState',
  default: 'Light' as Theme,
});

export { themeState };
