import React from 'react';
import { string as str } from 'prop-types';
import Button from './button';
import ButtonIcon from './button-icon';

const IconButton = ({
  icon,
  ...props
}) => (
  <Button {...props}>
    <ButtonIcon icon={icon} />
  </Button>
);

IconButton.propTypes = {
  icon: str.isRequired,
};

export default IconButton;
