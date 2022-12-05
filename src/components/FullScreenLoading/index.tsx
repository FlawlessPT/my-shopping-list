/* React and React Native */
import React from 'react';

/* External Libs */
import Spinner from 'react-native-spinkit';

/* Styles */
import { Container, Title } from './styles';

interface FullScreenLoadingProps {
  isLoading?: boolean;
}

const FullScreenLoading = ({ isLoading = true }: FullScreenLoadingProps): JSX.Element => {
  return (
    <>
      {isLoading && (
        <Container>
          <Spinner type="WanderingCubes" color="black" />
          <Title>A carregar lista de compras...</Title>
        </Container>
      )}
    </>
  );
};

export default FullScreenLoading;
