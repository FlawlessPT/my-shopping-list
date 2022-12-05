/* Styled Components */
import styled from 'styled-components/native';

/* Helpers */
import { verticalScale } from '~/helpers/metrics';

export const Spacer = styled.View`
  height: ${verticalScale(15)}px;
`;
