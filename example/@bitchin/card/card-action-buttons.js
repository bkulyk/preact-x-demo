import React from 'react';
import PropTypes from 'prop-types';

const CardActionButtons = ({ children }) => (
  <div className="mdc-card__action-buttons">
    {children}
  </div>
);

CardActionButtons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardActionButtons;
