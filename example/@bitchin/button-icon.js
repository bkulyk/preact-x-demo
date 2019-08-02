import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, children, ...props }) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={children}
    {...props}
  >
    {children}
  </i>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  style: {},
};

export default IconButton;
