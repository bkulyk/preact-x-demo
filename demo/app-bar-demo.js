import React, { useState, Fragment } from 'react';
import { AppBar, Drawer, List, NavLink } from '@bitchin/react-material-web/esm/index'

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <AppBar onNav={() => setOpen(!open)} title="Preacting" />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <List component="nav">
          <NavLink icon="inbox" active={true}>Inbox</NavLink>
          <NavLink icon="send">Sent</NavLink>
          <NavLink icon="drafts">Drafts</NavLink>
        </List>
      </Drawer>
    </Fragment>
  );
};
