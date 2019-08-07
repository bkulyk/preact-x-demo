import React from 'react';
import { node } from 'prop-types';

const Header = ({
  title,
  subtitle = '',
  ...props
}) => (
  <div className="mdc-drawer__header" {...props}>
    <div className="mdc-drawer__title">{title}</div>
    <div className="mdc-drawer__subtitle">{subtitle}</div>
  </div>
);

Header.propTypes = {
  title: node.isRequired,
  subtitle: node,
};

export default Header;
