import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, children, style }) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={children}
    type="button"
    style={style}
  >
    {children}
  </i>
);

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape,
};

IconButton.defaultProps = {
  type: 'button',
  className: '',
  style: {},
};

export default IconButton;
