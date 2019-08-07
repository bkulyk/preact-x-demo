import React from 'react';
import { string as str, node } from 'prop-types';

const IconButton = ({
  className = '',
  children,
  ...props
}) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={children}
    {...props}
  >
    {children}
  </i>
);

IconButton.propTypes = {
  children: node.isRequired,
  className: str,
};

export default IconButton;
