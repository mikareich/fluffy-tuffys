export type Color = string;

export interface ColorPalette {
  [key: number]: Color;
}

export const purple: ColorPalette = {
  100: '#6958EE',
  200: '#847AEE',
  300: '#9F9BEE',
};

export const gray: ColorPalette = {
  100: '#02111B',
  200: '#666765',
  300: '#D4DDED',
};

export const white: Color = '#FFFFFF';
