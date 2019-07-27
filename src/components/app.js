import React, { useState } from 'react';
import AppBar from './app-bar';
import CardDemo from './demo/card-demo';
import Drawer from './drawer';
import ButtonDemo from './demo/button-demo';
import ExpansionDemo from './demo/expansion-demo';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="/material-components-web.min.css" rel="stylesheet" />
      <link href="/whatever.css" rel="stylesheet" />

      <AppBar onNav={() => setOpen(!open)} title="Preacting" />
      <Drawer open={open} onClose={() => setOpen(false)} />

      <main style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
        <h1>Demo Page</h1>
        <ExpansionDemo />
        <CardDemo />
        <ButtonDemo />
      </main>
    </div>
  );
};

export default App;
