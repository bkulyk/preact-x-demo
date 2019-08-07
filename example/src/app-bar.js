import React, { useState, Fragment } from 'react';
import { AppBar as AppBarBase, Drawer, List, NavLink } from '@bitchin/react-material-web'
import { menu, appName } from './config';
import { withRouter } from 'react-router-dom';

const AppBar = ({ history }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('/');

  const handleNav = (path) => {
    setOpen(false);
    setActive(path);
    history.push(path);
  };

  return (
    <Fragment>
      <AppBarBase onNav={() => setOpen(!open)} title={appName} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        modal
      >
        <List component="nav">
          {menu.map(({ path, title }) => (
            <NavLink onClick={() => handleNav(path)} active={active === path} key={path}>
              {title}
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default withRouter(AppBar);
