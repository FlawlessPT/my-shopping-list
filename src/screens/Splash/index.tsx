/* React */
import React, { useEffect } from 'react';
import { FullScreenLoading } from '~/components';

/* Navigation */
import { AppNavProps, AppStackEnum, RootStackEnum } from '~/navigation/types';

const Splash = ({ navigation }: AppNavProps): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: RootStackEnum.TAB, params: { screen: AppStackEnum.HOME } }],
      });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return <FullScreenLoading />;
};

export default Splash;
