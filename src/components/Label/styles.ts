/* Styled Components */
import styled from 'styled-components/native';

/* Metrics */
import { scaleFS } from '~/helpers/metrics';

/* Types */
import { LabelProps } from '.';

interface DefaultTextProps extends LabelProps {
  fontFamily: string;
  size: number;
  lineHeight: number;
}

export const DefaultText = styled.Text<DefaultTextProps>`
  /* font-family: ${({ fontFamily }) => fontFamily}; */
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) => scaleFS(size)}px;
  line-height: ${({ lineHeight }) => scaleFS(lineHeight)}px;
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  text-decoration-color: ${({ color }) => color};
`;
