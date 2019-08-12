import React, { Fragment } from 'react';
import AppBar from './app-bar';
import ThemeDemo from './theme-demo';

const pageWrapper = (Component) => ({ ... props }) => (
  <Fragment>
    <ThemeDemo />
    <AppBar />
    <main style={{ backgroundColor: 'var(--mdc-theme-background)', padding: '1px 16px' }}>
      <Component {...props} />
    </main>
  </Fragment>
);

export default pageWrapper;