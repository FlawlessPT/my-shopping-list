/* Navigation */
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

enum RootStackEnum {
  SPLASH = 'Splash',
  TAB = 'Tab',
}

enum AppStackEnum {
  HOME = 'Home',
  PRODUCT_LIST = 'ProductList',
}

export type NavigationType = NativeStackNavigationProp<ParamListBase>;

export type AppNavProps = {
  navigation: NavigationType;
  route: RouteProp<ParamListBase>;
};

export const defaultScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

export { RootStackEnum, AppStackEnum };
