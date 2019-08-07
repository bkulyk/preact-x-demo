import React from 'react';
import Button from '../button';

const CardActionButton = props => (
  <Button {...props} className="mdc-card__action--button" raised={false} />
);

CardActionButton.propTypes = Button.propTypes;
CardActionButton.defaultProps = Button.defaultProps;

export default CardActionButton;
