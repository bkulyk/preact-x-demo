import React from 'react';
import Icon from './icon';

const IconButton = ({ className, ...props }) => (
  <Icon className="mdc-button__icon" {...props} />
);

IconButton.propTypes = Icon.propTypes;

export default IconButton;
