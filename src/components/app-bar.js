import React, { useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';
import '@material/drawer/dist/mdc.drawer.min.css';

import { MDCTopAppBar } from "@material/top-app-bar";

const AppBar = ({ title, onNav }) => {
  const appBarRef = useRef();

  useEffect(() => {
    MDCTopAppBar.attachTo(appBarRef.current);
  });

  return (
    <Fragment>
    <div className="mdc-drawer-app-content">
      <header className="mdc-top-app-bar app-bar" id="app-bar" ref={appBarRef}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a onClick={onNav} href="#" className="demo-menu material-icons mdc-top-app-bar__navigation-icon" style={{ textDecoration: 'none' }}>menu</a>
            <span className="mdc-top-app-bar__title">{title}</span>
          </section>
        </div>
      </header>
    </div>
    <div style={{ height: "64px" }}></div>
    </Fragment>
  );
};

AppBar.propTypes = {
  title: PropTypes.string,
  onNav: PropTypes.func,
};

AppBar.defaultProps = {
  title: '',
  onNav: () => {},
};

export default AppBar;
