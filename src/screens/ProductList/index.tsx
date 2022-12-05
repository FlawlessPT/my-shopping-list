/* React and React Native */
import React from 'react';
import { View, Text } from 'react-native';

const ProductList = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Product List</Text>
    </View>
  );
};

export default ProductList;
