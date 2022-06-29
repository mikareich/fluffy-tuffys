import { Color, ColorPalette, gray, purple, white } from './colors';
import { typeScale, GaliverSans, Minecraftory, TypeScale } from './typography';

export interface Theme {
  typography: {
    bodyFont: string;
    headingFont: string;
    typeScale: TypeScale;
  };
  colors: {
    background: Color;
    text: Color;
    primary: {
      palette: ColorPalette;
      default: Color;
    };
    secondary: {
      palette: ColorPalette;
      default: Color;
    };
  };
}

export const darkTheme: Theme = {
  typography: {
    bodyFont: GaliverSans,
    headingFont: Minecraftory,
    typeScale,
  },
  colors: {
    background: gray[100],
    text: white,
    primary: {
      palette: purple,
      default: purple[300],
    },
    secondary: {
      palette: gray,
      default: gray[300],
    },
  },
};
