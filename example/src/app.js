import React, { Fragment, Suspense} from 'react';
import { Router } from 'preact-router';
import AppBarDemo from './app-bar';
import ThemeDemo from './theme-demo';
import DemoPage from './demo-page';
import ThemePage from'./theme-page';
import DrawerPage from './drawer-page';
import ExpansionPanelPage from './expansion-panel-page';

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
            <ExpansionPanelPage path="/expansion-panels" />
            <DrawerPage path="/drawers" />
            <ThemePage path="/theme" />
            <DemoPage path="/" default />
          </Router>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default App;
