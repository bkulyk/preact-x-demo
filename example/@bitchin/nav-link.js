import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import ButtonIcon from './button-icon';

const NavLink = ({
  children,
  icon = null,
  active = false,
  ...props
}) => {
  const classes = clsx(
    'mdc-list-item',
    { 'mdc-list-item--activated': active },
  );

  return (
    <a
      role="link"
      className={classes}
      {...props}
    >
      {icon
        ? (<ButtonIcon className="mdc-list-item__graphic">{icon}</ButtonIcon>)
        : ''
      }
      {children}
    </a>
  );
};

NavLink.propTypes = {
  icon: propTypes.string,
  children: propTypes.node.isRequired,
  active: propTypes.bool,
};

export default NavLink;
