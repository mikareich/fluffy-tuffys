import '@emotion/react';
import { Theme as EmotionTheme } from './utils/emotion';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
