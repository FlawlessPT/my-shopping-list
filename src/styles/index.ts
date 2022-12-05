/* React and React Native */
import { ViewProps } from 'react-native';

/* External Libs */
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

/* Styled Components */
import styled from 'styled-components/native';

/* Helpers */
import { scale, scaleFS } from '~/helpers/metrics';

interface SeparatorProps extends ViewProps {
  withFullWidth?: boolean;
  verticalSpacing?: number;
}

export const MainContainer = styled(SafeAreaView).attrs<SafeAreaViewProps>(
  ({ style }): SafeAreaViewProps => ({
    style,
  })
)<SafeAreaViewProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${scale(20)}px;
`;

export const MainTitle = styled.Text`
  font-size: ${scaleFS(26)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: ${scaleFS(12)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Separator = styled.View<SeparatorProps>`
  width: ${({ withFullWidth }) => (!withFullWidth ? `${scale(withFullWidth ? 0 : 100)}px` : '100%')};
  border-width: 1px;
  margin-vertical: ${({ verticalSpacing }) => (verticalSpacing ? verticalSpacing : scale(20))}px;
`;

export const HorizontalSafeMargin = styled.View`
  padding-horizontal: ${({ theme }) => theme.dimensions.horizontalSafeMargin.forStyledComponent};
`;
