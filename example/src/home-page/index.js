/* eslint import/no-cycle: off */
import React, { Fragment } from 'react';
import {
  Typography,
  List,
  ListItem,
  NavLink,
} from '@bitchin/react-material-web';
import { withRouter } from 'react-router-dom';
import { history as historyType } from 'react-router-prop-types';
import menu from '../menu';
import PageTitle from '../page-title';

const DemoPage = ({ history }) => {
  const handleNav = (path) => {
    history.push(path);
  };

  return (
    <Fragment>
      <PageTitle>
        <i>@Bitchin</i>
        /React Material Web
      </PageTitle>

      <Typography use="headline5" component="h3">Components Available</Typography>
      <List>
        {menu.map(({ title, path }) => (
          (
            path !== '/' && path !== '/theme-editor'
              ? (<NavLink onClick={() => handleNav(path)} key={path}>{title}</NavLink>)
              : ''
          )
        ))}
      </List>

      <Typography use="headline5" component="h3">Components Coming Soon</Typography>
      <List>
        <ListItem>Chips</ListItem>
        <ListItem>Data Table</ListItem>
        <ListItem>Dialog</ListItem>
        <ListItem>Floating Action Button</ListItem>
        <ListItem>Image List</ListItem>
        <ListItem>Linear Progress Indicator</ListItem>
        <ListItem>Menu</ListItem>
        <ListItem>Snackbar</ListItem>
      </List>
    </Fragment>
  );
};

DemoPage.propTypes = {
  history: historyType.isRequired,
};

export default withRouter(DemoPage);
