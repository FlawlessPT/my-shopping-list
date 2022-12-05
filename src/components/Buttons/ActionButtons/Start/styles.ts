/* Styled Components */
import styled from 'styled-components/native';

/* Styles */
import { BaseActionIconContainer } from '../styles';

/* External Libs */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

export const StartIconContainer = styled(BaseActionIconContainer)`
  background-color: ${({ theme }) => theme.colors.active};
`;

export const StartIcon = styled(Icon).attrs(
  ({ theme }): IconProps => ({
    name: 'play',
    size: theme.dimensions.actionButtons,
    color: theme.colors.white,
  })
)``;
