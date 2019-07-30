import React, { Fragment, Suspense} from 'react';
import { Router } from 'preact-router';
import AppBarDemo from './app-bar';
import ThemeDemo from './theme';
import DemoPage from './demo-page';
import ThemePage from'./theme-page';

const Loading = () => (<span>Loading ...</span>);

const App = () => {
  return (
    <Fragment>
      <ThemeDemo />
      <link href="/whatever.css" rel="stylesheet" />
      <AppBarDemo />

      <main style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
        <Suspense fallback={Loading}>
          <Router>
            <ThemePage path="/theme" />
            <DemoPage default />
          </Router>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default App;
