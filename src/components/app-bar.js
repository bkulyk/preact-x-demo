import React, { Fragment, useEffect, useState } from 'react';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';
import '@material/drawer/dist/mdc.drawer.min.css';

import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";

const AppBar = () => {
  const [open, setOpen] = useState(false);
  let topAppBar;
  let drawer;

  useEffect(() => {
    topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  });

  const doOpen = () => {
    drawer.open = !drawer.open
    setOpen(drawer.open);
  }

  return (
    <Fragment>
      <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
              <span class="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </aside>

      <div className="mdc-drawer-scrim"></div>

      <div className="mdc-drawer-app-content">
        <header className="mdc-top-app-bar app-bar" id="app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a onClick={() => doOpen(!open)} href="#" className="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
              <span className="mdc-top-app-bar__title">Dismissible Drawer</span>
            </section>
          </div>
        </header>
      </div>

      <main className="main-content" id="main-content">
        <div className="mdc-top-app-bar--fixed-adjust">
          App Content
        </div>
      </main>
    </Fragment>
  );
};

export default AppBar;
