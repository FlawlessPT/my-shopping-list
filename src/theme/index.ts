/* Styled Components */
import { DefaultTheme } from 'styled-components/native';
import { scale } from '~/helpers/metrics';

interface DimensionForStyledComponent {
  forStyledComponent: string;
  value: number;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      productCard: string;
      title: string;
      shadow: string;
      active: string;
      inactive: string;
      red: string;
      white: string;
    };
    dimensions: {
      horizontalSafeMargin: DimensionForStyledComponent;
      actionButtons: number;
    };
    // fonts: {
    //   bold: string;
    //   light: string;
    //   regular: string;
    // };
  }
}

export const theme: DefaultTheme = {
  colors: {
    main: '#fed700',
    background: '#F4F4F4',
    productCard: '#fff',
    title: '#333333',
    shadow: '#CDCDCD',
    active: '#fed700',
    inactive: '#CDCDCD',
    red: 'red',
    white: '#fff',
  },
  dimensions: {
    horizontalSafeMargin: {
      forStyledComponent: `${scale(scale(20))}px`,
      value: scale(20),
    },
    actionButtons: scale(35),
  },
  // fonts: {
  //   bold: 'Quicksand-Bold',
  //   light: 'Quicksand-Light',
  //   regular: 'Quicksand-Regular',
  // }
};
