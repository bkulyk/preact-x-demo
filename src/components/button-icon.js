import React from 'react';
import PropTypes from 'prop-types';
import '@material/icon-button/dist/mdc.icon-button.min.css';

const IconButton = ({ className, children }) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={children}
    type="button"
  >
    {children}
  </i>
);

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  type: 'button',
  className: '',
};

export default IconButton;
