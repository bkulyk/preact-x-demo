import React from 'react';
import AppBarDemo from './demo/app-bar-demo';
import CardDemo from './demo/card-demo';
import ButtonDemo from './demo/button-demo';
import ExpansionDemo from './demo/expansion-demo';
import ThemeDemo from './demo/theme-demo';

const App = () => (
  <div>
    <link href="/whatever.css" rel="stylesheet" />
    <ThemeDemo />

    <AppBarDemo />

    <main style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
      <h1>Demo Page</h1>
      <ExpansionDemo />
      <CardDemo />
      <ButtonDemo />
    </main>
  </div>
);

export default App;
