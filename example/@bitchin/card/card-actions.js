import React from 'react';
import PropTypes from 'prop-types';

const CardActions = ({ children }) => (
  <div className="mdc-card__actions">
    {children}
  </div>
);

CardActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardActions;
