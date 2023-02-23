import { atom } from 'recoil';
import { Theme } from './types';

const themeState = atom({
  key: 'themeState',
  default: 'Light' as Theme,
});

export { themeState };
