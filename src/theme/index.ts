/* Styled Components */
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      white: string;
      black: string;
      disabled: string;
      gray: string;
    };
    // fonts: {
    //   bold: string;
    //   light: string;
    //   regular: string;
    // };
  }
}

// const fonts = {
//   bold: 'Quicksand-Bold',
//   light: 'Quicksand-Light',
//   regular: 'Quicksand-Regular',
// };

export const theme: DefaultTheme = {
  colors: {
    main: '#fed700',
    white: '#fff',
    black: '#000',
    disabled: '#dddddd',
    gray: '#787878',
  },
  //   fonts,
};
