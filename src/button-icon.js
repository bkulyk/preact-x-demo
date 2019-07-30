import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, children, style }) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={children}
    style={style}
  >
    {children}
  </i>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape,
};

IconButton.defaultProps = {
  className: '',
  style: {},
};

export default IconButton;
