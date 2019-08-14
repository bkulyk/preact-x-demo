import React from 'react';
import { string as str } from 'prop-types';

const IconButton = ({
  icon,
  className = '',
  ...props
}) => (
  <button
    className={`mdc-icon-button material-icons mdc-top-app-bar__action-item ${className}`.trimRight()}
    aria-label={icon}
    {...props}
    type="button"
  >
    {icon}
  </button>
);

IconButton.propTypes = {
  icon: str.isRequired,
  className: str,
};

export default IconButton;
