import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBarDemo from './app-bar';
import ThemeDemo from './theme-demo';
import DemoPage from './demo-page';
import ThemePage from'./theme-page';
import DrawerPage from './drawer-page';
import ExpansionPanelPage from './expansion-panel-page';
import TextFieldPage from './text-field-page';
import SliderPage from './slider-page';
import SwitchPage from './switch-page';
import GridPage from './grid-page.js';

const Loading = () => (<span>Loading ...</span>);

const App = () => {
  return (
    <Router basename={baseName}>
      <ThemeDemo />
      <AppBarDemo />

      <main style={{ backgroundColor: 'var(--mdc-theme-background)', padding: '16px' }}>
        <Suspense fallback={Loading}>
          <Route component={ExpansionPanelPage} path="/expansion-panels" />
          <Route component={DrawerPage} path="/drawers" />
          <Route component={ThemePage} path="/theme" />
          <Route component={TextFieldPage} path="/text-field" />
          <Route component={SliderPage} path="/sliders" />
          <Route component={SwitchPage} path="/switches" />
          <Route component={GridPage} path="/layout-grids" />
          <Route component={DemoPage} path="/" exact />
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
