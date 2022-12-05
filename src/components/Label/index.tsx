/* React and React Native */
import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

/* Theme */
import { theme } from '~/theme';

/* Styles */
import { DefaultText } from './styles';

/* Types */
import { TypographyType } from './types';

/* Utils */
import { getTypographySpecification } from './utils';

export interface LabelProps extends TextProps {
  type?: TypographyType;
  bold?: boolean;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  isUnderline?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Label = ({
  type = 'body',
  color,
  textAlign = 'left',
  numberOfLines = 1,
  isUnderline,
  children,
  style,
}: LabelProps) => {
  const labelProps = {
    textAlign,
    numberOfLines,
    isUnderline,
    style,
    ...getTypographySpecification(type),
  };

  return (
    <DefaultText
      // fontFamily={bold ? theme.fonts.bold : light ? theme.fonts.light : theme.fonts.regular}
      color={color || theme.colors.title}
      allowFontScaling={false}
      {...labelProps}
    >
      {children}
    </DefaultText>
  );
};

export default Label;
