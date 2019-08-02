import React, { Fragment, Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBarDemo from './app-bar';
import ThemeDemo from './theme-demo';
import DemoPage from './demo-page';
import ThemePage from'./theme-page';
import DrawerPage from './drawer-page';
import ExpansionPanelPage from './expansion-panel-page';

const Loading = () => (<span>Loading ...</span>);

const App = () => {
  return (
    <Router>
      <ThemeDemo />
      <link href="/whatever.css" rel="stylesheet" />

      <AppBarDemo />

      <main style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
        <Suspense fallback={Loading}>
          <Route component={ExpansionPanelPage} path="/expansion-panels" />
          <Route component={DrawerPage} path="/drawers" />
          <Route component={ThemePage} path="/theme" />
          <Route component={DemoPage} path="/" exact />
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
