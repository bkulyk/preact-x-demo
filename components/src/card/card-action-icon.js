import React from 'react';
import PropTypes from 'prop-types';

const CardActionIcon = ({ children, onClick }) => (
  <button className="mdc-icon-button mdc-card__action mdc-card__action--icon" onClick={onClick}>
    <i className="material-icons mdc-icon-button__icon">
      {children}
    </i>
  </button>
);

CardActionIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

CardActionIcon.defaultProps = {
  onClick: () => {},
};

export default CardActionIcon;
