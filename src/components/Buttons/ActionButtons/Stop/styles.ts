/* Styled Components */
import styled from 'styled-components/native';

/* Styles */
import { BaseActionIconContainer } from '../styles';

/* External Libs */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

export const StopIconContainer = styled(BaseActionIconContainer)`
  background-color: ${({ theme }) => theme.colors.red};
`;

export const StopIcon = styled(Icon).attrs(
  ({ theme }): IconProps => ({
    name: 'stop',
    size: theme.dimensions.actionButtons,
    color: theme.colors.white,
  })
)``;
