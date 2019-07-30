import React, { useRef, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MDCDrawer } from "@material/drawer";

const Drawer = ({
  open,
  onClose,
  onOpen,
  children,
}) => {
  let drawer;
  const drawerRef = useRef();

  useEffect(() => {
    const activated = drawerRef.current.getElementsByClassName('mdc-list-item--activated').length;
    if (!activated) {
      const allItems = drawerRef.current.getElementsByClassName('mdc-list-item');
      if (allItems.length) {
        // if nothing is activated, the the drawer will throw an error
        allItems[0].className += "  mdc-list-item--activated";
      }
    }

    drawer = MDCDrawer.attachTo(drawerRef.current);
    drawer.open = open;
    drawer.listen('MDCDrawer:closed', onClose);
    drawer.listen('MDCDrawer:opened', onOpen);
  });

  return (
    <Fragment>
      <aside className="mdc-drawer mdc-drawer--modal" ref={drawerRef}>
        <div className="mdc-drawer__content">
          {children}
        </div>
      </aside>
      <div className="mdc-drawer-scrim"></div>
    </Fragment>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  children: PropTypes.node,
}

Drawer.defaultProps = {
  open: false,
  onClose: () => {},
  onOpen: () => {},
  children: ''
}

export default Drawer;
