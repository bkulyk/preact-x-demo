import React from 'react';
import { node } from 'prop-types';

const Header = ({
  title,
  subtitle
}) => (
  <div className="mdc-drawer__header">
    <div className="mdc-drawer__title">{title}</div>
    <div className="mdc-drawer__subtitle">{subtitle}</div>
  </div>
);

Header.propTypes = {
  title: node.isRequired,
  subtitle: node,
}

Header.defaultProps = {
  subtitle: '',
}

export default Header;
