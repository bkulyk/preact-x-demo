import React from 'react';
import Button from 'preact-material-components/esm/Button';
import AppBar from './app-bar';

const App = () => {
  return (
    <div>
      <link href="/whatever.css" />
      <link href="/mat/style.css" />
      <link href="/mat/theme/style.css" />
      <AppBar />
      hi there

      <Button ripple raised>
        Flat button with ripple
      </Button>
      <Button ripple raised className="mdc-theme--primary-bg">
        Primary background button
      </Button>
      <Button href="/">This button will be rendered as an anchor</Button>

      <Button>Default Flat button without ripple</Button>

      <Button raised>Default Raised button</Button>

      <Button unelevated>Default Unelevated button</Button>
    </div>
  );
};

export default App;
