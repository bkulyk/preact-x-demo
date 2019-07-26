import React, { useState } from 'react';
import AppBar from './app-bar';
import CardDemo from './demo/card-demo';
import Drawer from './drawer';
import ButtonDemo from './demo/button-demo';

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

      <h1>Demo Page</h1>

      <CardDemo />

      <ButtonDemo />
    </div>
  );
};

export default App;
