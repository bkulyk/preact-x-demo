import React, { useState, Fragment } from 'react';
import {
  AppBar as AppBarBase,
  Drawer,
  List,
  NavLink,
} from '@bitchin/react-material-web';
import { withRouter } from 'react-router-dom';
import { history as historyType } from 'react-router-prop-types';
import { appName } from './config';
import menu from './menu';

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

AppBar.propTypes = {
  history: historyType.isRequired,
};

export default withRouter(AppBar);
