/* React and React Native */
import React from 'react';
import { AppRegistry } from 'react-native';

/* App */
import App from './App';
import { name as appName } from './app.json';

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    //  Cancelling background app launch on iOS
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
