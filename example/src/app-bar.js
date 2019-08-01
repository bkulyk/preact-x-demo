import React, { useState, Fragment } from 'react';
import { AppBar as AppBarBase, Drawer, List, NavLink } from '@bitchin/react-material-web'
import { route } from 'preact-router';

const menu = [
  { title: 'Demos', path: '/' },
  { title: 'Theme Editor', path: '/theme' },
  { title: 'Drawers', path: '/drawers' },
  { title: 'Expansion Panels', path: '/expansion-panels' },
];

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('/');

  const handleNav = (path) => {
    setOpen(false);
    setActive(path);
    route(path);
  };

  return (
    <Fragment>
      <AppBarBase onNav={() => setOpen(!open)} title="Preacting" />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        modal
      >
        <List component="nav">
          {menu.map(({ path, title }) => (
            <NavLink onClick={() => handleNav(path)} active={active === path}>
              {title}
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default AppBar;
