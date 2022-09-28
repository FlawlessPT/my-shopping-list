/* React */
import React from 'react';

/* Navigation */
import Navigation from '~/navigation';

/* Providers */
import Providers from '~/providers';

export default function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}
