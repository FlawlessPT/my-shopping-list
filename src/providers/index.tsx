/* React and React Native */
import React from 'react';

/* External Libs */
import { ThemeProvider } from 'styled-components/native';

/* Theme */
import { theme } from '~/theme';

interface ProvidersProps {
  children: JSX.Element;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
