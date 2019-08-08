import React from 'react';
import { node } from 'prop-types';

const CardActionIcons = ({ ...props }) => (
  <div {...props} className="mdc-card__action-icons" />
);

CardActionIcons.propTypes = {
  children: node.isRequired,
};

export default CardActionIcons;
