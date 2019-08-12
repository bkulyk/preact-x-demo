import React from 'react';
import { string as str } from 'prop-types';
import Button from './button';

const CardActionButton = ({ className = '', ...props }) => (
  <Button
    raised={false}
    className={`mdc-card__action--button ${className}`.trimRight()}
    {...props}
  />
);

CardActionButton.propTypes = {
  className: str,
};

CardActionButton.propTypes = Button.propTypes;
CardActionButton.defaultProps = Button.defaultProps;

export default CardActionButton;
