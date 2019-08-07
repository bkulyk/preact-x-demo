import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  icon='',
  className = '',
  children = '',
  ...props,
}) => (
  <i
    className={`material-icons mdc-button__icon ${className}`}
    title={icon || children}
    {...props}
  >
    {icon || children}
  </i>
);

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
};

export default Icon;
