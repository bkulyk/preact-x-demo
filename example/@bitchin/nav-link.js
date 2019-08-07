import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import ButtonIcon from './button-icon';

const NavLink = ({
  icon,
  onClick,
  children,
  active,
  ...props,
}) => {
  const classes = clsx(
    'mdc-list-item',
    { 'mdc-list-item--activated': active },
  )
  return (
    <a
      onClick={onClick}
      className={classes}
      tabIndex="-1"
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
  onClick: propTypes.func,
  icon: propTypes.string,
  children: propTypes.node.isRequired,
  active: propTypes.bool,
};

NavLink.defaultProps = {
  onClick: () => {},
  active: false,
  icon: null,
}

export default NavLink;
