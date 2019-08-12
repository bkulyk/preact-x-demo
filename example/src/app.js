import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { baseName } from './config';
import AppBarDemo from './app-bar-page/app-bar-demo';
import menu from './menu';
import pageWrapper from './page-wrapper';

const App = () => (
  <Router basename={baseName}>
    {menu.map(({ component, path }) => (
      <Route
        path={path}
        component={pageWrapper(component)}
        exact={path === '/'}
        key={path}
      />
    ))}
    <Route path="/app-bar-demo" component={AppBarDemo} />
  </Router>
);

export default App;
