import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { baseName } from './config';
import AppBarSimple from './app-bar-page/simple';
import AppBarShort from './app-bar-page/short';
import AppBarDense from './app-bar-page/dense';
import AppBarShortCollapsed from './app-bar-page/short-collapsed';
import AppBarProminent from './app-bar-page/prominent';
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
    <Route path="/app-bar-simple" component={AppBarSimple} />
    <Route path="/app-bar-short" component={AppBarShort} />
    <Route path="/app-bar-dense" component={AppBarDense} />
    <Route path="/app-bar-short-collapsed" component={AppBarShortCollapsed} />
    <Route path="/app-bar-prominent" component={AppBarProminent} />
  </Router>
);

export default App;
