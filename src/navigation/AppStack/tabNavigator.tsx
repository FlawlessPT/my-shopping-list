/* React */
import React from 'react';

/* External Libs */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* Navigation */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Types */
import { AppStackEnum, RootStackEnum } from '../types';

/* Screens */
import { Home, ProductList } from '~/screens';
import { theme } from '~/theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      id={RootStackEnum.TAB}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
        },
        tabBarLabel: () => <></>,
      }}
    >
      <Tab.Screen
        name={AppStackEnum.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />,
        }}
      />
      <Tab.Screen
        name={AppStackEnum.PRODUCT_LIST}
        component={ProductList}
        options={{
          tabBarIcon: ({ color }) => <Icon name="format-list-bulleted" size={25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
