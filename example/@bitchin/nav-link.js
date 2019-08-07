import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import ButtonIcon from './button-icon';

const NavLink = ({
  icon,
  children,
  active,
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

NavLink.defaultProps = {
  active: false,
  icon: null,
};

export default NavLink;
