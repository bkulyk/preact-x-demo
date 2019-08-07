import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarDemo from './app-bar';
import ThemeDemo from './theme-demo';
import menu from './menu';
import { baseName } from './config';

const Loading = () => (<span>Loading ...</span>);

const App = () => (
  <Router basename={baseName}>
    <ThemeDemo />
    <AppBarDemo />

    <main style={{ backgroundColor: 'var(--mdc-theme-background)', padding: '16px' }}>
      <Suspense fallback={Loading}>
        {menu.map(({ component, path }) => (
          <Route
            path={path}
            component={component}
            exact={path === '/'}
            key={path}
          />
        ))}
      </Suspense>
    </main>
  </Router>
);

export default App;
