/* eslint jsx-a11y/anchor-is-valid: off */
import React, { useEffect, useRef, Fragment } from 'react';
import { string as str, func, bool } from 'prop-types';
import clsx from 'clsx';
import { MDCTopAppBar } from '@material/top-app-bar';

const AppBar = ({
  title = '',
  onNav = () => {},
  prominent = false,
  dense = false,
  fixed = false,
  short = false,
  shortCollapsed = false,
}) => {
  const appBarRef = useRef();

  useEffect(() => {
    MDCTopAppBar.attachTo(appBarRef.current);
  });

  const classNames = clsx(
    'mdc-top-app-bar app-bar',
    {
      'mdc-top-app-bar--prominent': prominent,
      'mdc-top-app-bar--dense': dense,
      'mdc-top-app-bar--fixed': fixed,
      'mdc-top-app-bar--short': short,
      'mdc-top-app-bar--short-collapsed': shortCollapsed,
    },
  );
  return (
    <Fragment>
      <div className="mdc-drawer-app-content">
        <header className={classNames} id="app-bar" ref={appBarRef}>
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a
                role="button"
                onClick={onNav}
                href="#"
                className="demo-menu material-icons mdc-top-app-bar__navigation-icon"
                style={{ textDecoration: 'none' }}
              >
                menu
              </a>
              <span className="mdc-top-app-bar__title" style={{ color: 'var(--mdc-theme-on-primary)' }}>{title}</span>
            </section>
          </div>
        </header>
      </div>
      <div className="mdc-top-app-bar--fixed-adjust" />
    </Fragment>
  );
};

AppBar.propTypes = {
  title: str,
  onNav: func,
  prominent: bool,
  dense: bool,
  fixed: bool,
  short: bool,
  shortCollapsed: bool,
};

export default AppBar;
