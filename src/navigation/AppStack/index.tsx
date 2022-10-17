/* React */
import React from 'react';
import { StatusBar } from 'react-native';

/* Navigation */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './tabNavigator';

/* Components */
import { Splash } from '~/screens';
// import { FullScreenLoading } from '~/components';

/* Types */
import { defaultScreenOptions, RootStackEnum } from '../types';

const Stack = createNativeStackNavigator();

export default function AppStack(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <FullScreenLoading /> */}
      <Stack.Navigator
        id={RootStackEnum.SPLASH}
        initialRouteName={RootStackEnum.SPLASH}
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen name={RootStackEnum.SPLASH} component={Splash} />
        <Stack.Screen name={RootStackEnum.TAB} component={TabStack} />
      </Stack.Navigator>
    </>
  );
}
