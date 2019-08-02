import React, { useRef, useEffect, Fragment } from 'react';
import {
  bool,
  func,
  node,
  string as str,
} from 'prop-types';
import clsx from 'clsx';
import { MDCDrawer } from "@material/drawer";
import Header from './header';

const fixNoneSelectedIssue = (drawerRef) => {
  const activated = drawerRef.current.getElementsByClassName('mdc-list-item--activated').length;
  if (!activated) {
    const allItems = drawerRef.current.getElementsByClassName('mdc-list-item');
    if (allItems.length) {
      // if nothing is activated, the the drawer will throw an error
      allItems[0].className += "  mdc-list-item--activated";
    }
  }
};

const Drawer = ({
  open,
  onClose,
  onOpen,
  children,
  modal,
  dismissible,
  title,
  subtitle,
  className,
  drawerContent,
  appContent,
}) => {
  let drawer;
  const drawerRef = useRef();

  useEffect(() => {
    if (dismissible || modal) {
      fixNoneSelectedIssue(drawerRef);

      drawer = MDCDrawer.attachTo(drawerRef.current);
      drawer.open = open;
      drawer.listen('MDCDrawer:closed', onClose);
      drawer.listen('MDCDrawer:opened', onOpen);
    }
  });

  const classNames = clsx([
    className,
    'mdc-drawer',
    {
      'mdc-drawer--modal': modal,
      'mdc-drawer--dismissible': dismissible,
    }
  ]);

  return (
    <Fragment>
      <aside className={classNames} ref={drawerRef}>
        {
          title ?
            (<Header title={title} subtitle={subtitle} />)
            : ''
        }
        <div className="mdc-drawer__content">
          {children}{drawerContent}
        </div>

      </aside>
      {
        dismissible && appContent
          ? (<div className="mdc-drawer-app-content">{appContent}</div>)
          : ''
      }
      {
        modal
          ? (<div className="mdc-drawer-scrim" />)
          : ''
      }
    </Fragment>
  );
};

Drawer.propTypes = {
  open: bool,
  onClose: func,
  onOpen: func,
  children: node,
  modal: bool,
  dismissible: bool,
  title: str,
  subtitle: str,
  className: str,
}

Drawer.defaultProps = {
  open: false,
  onClose: () => {},
  onOpen: () => {},
  children: '',
  modal: false,
  dismissible: false,
  title: null,
  subtitle: null,
  className: '',
}

export default Drawer;
