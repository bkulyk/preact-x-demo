import React from 'react';
import { func, node } from 'prop-types';
import Button from '../button';

const CardActionIcon = ({
  children,
  onClick = () => {},
}) => (
  <Button className="mdc-icon-button mdc-card__action mdc-card__action--icon" onClick={onClick}>
    <i className="material-icons mdc-icon-button__icon">
      {children}
    </i>
  </Button>
);

CardActionIcon.propTypes = {
  children: node.isRequired,
  onClick: func,
};

export default CardActionIcon;
