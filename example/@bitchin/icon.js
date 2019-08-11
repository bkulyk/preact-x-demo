import React from 'react';
import { node, string as str } from 'prop-types';

const Icon = ({
  icon = '',
  className = '',
  children = '',
  ...props
}) => (
  <i
    className={`material-icons ${className}`}
    title={icon || children}
    {...props}
  >
    {icon || children}
  </i>
);

Icon.propTypes = {
  children: node,
  className: str,
  icon: str,
};

export default Icon;
