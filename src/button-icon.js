import React from 'react';
import Icon from './icon';

const ButtonIcon = ({ className, ...props }) => (
  <Icon className={`${className} mdc-button__icon`} {...props} />
);

ButtonIcon.propTypes = Icon.propTypes;

export default ButtonIcon;
