import React from 'react';
import PropTypes from 'prop-types';

const CardActionIcons = ({ children }) => (
  <div className="mdc-card__action-icons">
    {children}
  </div>
);

CardActionIcons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardActionIcons;
