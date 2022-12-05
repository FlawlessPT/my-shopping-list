/* Styled Components */
import styled from 'styled-components/native';

/* External Libs */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

/* Helpers */
import { scale } from '~/helpers/metrics';

const checkBoxContainerSize = 40;

export const ContainerChecked = styled.TouchableOpacity`
  width: ${checkBoxContainerSize}px;
  height: ${checkBoxContainerSize}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.active};
  align-items: center;
  justify-content: center;
`;

export const ContainerUnchecked = styled.TouchableOpacity`
  width: ${checkBoxContainerSize}px;
  height: ${checkBoxContainerSize}px;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.colors.active};
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;

export const CheckboxIcon = styled(Icon).attrs(
  ({ theme }): IconProps => ({
    name: 'check',
    size: scale(25),
    color: theme.colors.white,
  })
)``;
