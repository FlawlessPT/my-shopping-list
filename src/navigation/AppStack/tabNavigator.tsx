/* React */
import React from 'react';

/* Navigation */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Options */
import { AppStackEnum, RootStackEnum } from '../types';

/* Screens */
import { Home, ProductList } from '~/screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      id={RootStackEnum.TAB}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={AppStackEnum.HOME} component={Home} />
      <Tab.Screen name={AppStackEnum.PRODUCT_LIST} component={ProductList} />
    </Tab.Navigator>
  );
}
