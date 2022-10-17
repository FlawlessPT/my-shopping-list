/* React and React Native */
import React from 'react';

/* External Libs */
import Spinner from 'react-native-spinkit';

/* Styles */
import { Container, Title } from './styles';

const FullScreenLoading = (): JSX.Element => {
  const isLoading = true;

  return (
    isLoading && (
      <Container>
        <Spinner type="WanderingCubes" color="black" />
        <Title>A carregar lista de compras...</Title>
      </Container>
    )
  );
};

export default FullScreenLoading;
