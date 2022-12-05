/* Styled Components */
import styled from 'styled-components/native';
import { verticalScale } from '~/helpers/metrics';
import { Subtitle } from '~/styles';

export const HeaderContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.dimensions.horizontalSafeMargin.forStyledComponent};
  padding-bottom: ${verticalScale(20)}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubtitleLabel = styled(Subtitle)`
  max-width: 100%;
`;
