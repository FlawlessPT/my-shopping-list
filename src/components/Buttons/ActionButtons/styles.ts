import styled from 'styled-components/native';
import { scale } from '~/helpers/metrics';

export const BaseActionIconContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.dimensions.actionButtons + 10}px;
  height: ${({ theme }) => theme.dimensions.actionButtons + 10}px;
  border-radius: ${scale(100)}px;
  align-items: center;
  justify-content: center;
`;
