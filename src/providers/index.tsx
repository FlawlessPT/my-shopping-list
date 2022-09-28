/* React */
import React from 'react';

interface ProvidersProps {
  children: JSX.Element;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <>{children}</>;
};

export default Providers;
