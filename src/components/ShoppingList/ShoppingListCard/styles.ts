/* Styled Components */
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-vertical: 15px;
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.productCard};
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.shadow};
`;

export const ProductContainer = styled.View`
  flex: 1;
`;
