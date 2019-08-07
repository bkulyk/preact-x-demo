import React from 'react';
import { node } from 'prop-types';

const CardActionButtons = ({ ...props }) => (
  <div {...props} className="mdc-card__action-buttons" />
);

CardActionButtons.propTypes = {
  children: node.isRequired,
};

export default CardActionButtons;
