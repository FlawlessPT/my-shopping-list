/* React */
import React from 'react';

/* Navigation */
import { NavigationContainer } from '@react-navigation/native';

/* Stacks */
import RootStack from './AppStack';

export default function RootNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
