import React, { Fragment, useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  Button,
  Drawer,
} from '@bitchin/react-material-web';
import Example from '../example';

const DrawerSampleContent = () => (
  <List component="div">
    <ListItem>Bart</ListItem>
    <ListItem>List</ListItem>
    <ListItem>Maggie</ListItem>
  </List>
);

const DrawerPage = () => {
  const [dismissibleOpen, setDismissibleOpen] = useState(false);

  return (
    <Fragment>
      <Typography use="headline4" component="h2">Drawers</Typography>

      <Typography use="headline5" component="h3">Static Drawer</Typography>
      <Example>
        <Drawer
          title="DrawerHeader"
          subtitle="Subtitle"
        >
          <DrawerSampleContent />
        </Drawer>
      </Example>

      <div>
        <Typography use="headline5" component="h3">Modal Drawer</Typography>
        <Typography component="div">
          <p>The app bar used on this page is an example of a modal drawer.</p>
        </Typography>
      </div>

      <Typography use="headline5" component="h3">Dismissable Drawer</Typography>

      <Example>
        <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
          <Drawer
            dismissible
            open={dismissibleOpen}
            appContent={(
              <Typography component="div" style={{ margin: '0px -16px' }}>
                <div style={{ padding: '20px' }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure.
                  </p>
                </div>
              </Typography>
            )}
            drawerContent={(<DrawerSampleContent />)}
          />

          <p style={{ textAlign: 'center' }}>
            <Button secondary onClick={() => setDismissibleOpen(!dismissibleOpen)}>
              Toggle Drawer
            </Button>
          </p>
        </div>
      </Example>
    </Fragment>
  );
};

export default DrawerPage;
