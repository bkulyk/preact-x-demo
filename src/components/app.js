import React from 'react';
import AppBarDemo from './demo/app-bar-demo';
import CardDemo from './demo/card-demo';
import ButtonDemo from './demo/button-demo';
import ExpansionDemo from './demo/expansion-demo';

const App = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="/material-components-web.min.css" rel="stylesheet" />
    <link href="/whatever.css" rel="stylesheet" />

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
