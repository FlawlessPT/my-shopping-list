import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 150px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
