import React from 'react';
import { Button } from '@rmwc/button';
import { createSnackbarQueue, SnackbarQueue } from '@rmwc/snackbar';
import '@material/snackbar/dist/mdc.snackbar.css';
import '@material/button/dist/mdc.button.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import AppBar from './app-bar';
import CardDemo from './card-demo';

const l = x => { console.log(x); return; };

const App = () => {
  const { messages, notify } = createSnackbarQueue();

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="/material-components-web.min.css" rel="stylesheet" />
      <link href="/whatever.css" rel="stylesheet" />
      <AppBar />
      hi there

      <CardDemo />

      <h2>Button Demos</h2>

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
      <Button outlined>Default outlined button</Button>

      <Button
          label="Notify"
          onClick={() =>
            notify({
              title: <b>Success</b>,
              body: l('You have selected pizza!'),
              icon: 'check',
              actions: [
                {
                  title: 'Dismiss'
                }
              ]
            })
          }
        />
    </div>
  );
};

export default App;
