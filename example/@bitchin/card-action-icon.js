import React from 'react';
import { string as str, node } from 'prop-types';

const CardActionIcon = ({
  children,
  className = '',
  ...props
}) => (
  <button
    type="button"
    className={`mdc-icon-button mdc-card__action mdc-card__action--icon ${className}`.trimRight()}
    {...props}
  >
    <i className="material-icons mdc-icon-button__icon">
      {children}
    </i>
  </button>
);

CardActionIcon.propTypes = {
  children: node.isRequired,
  className: str,
};

export default CardActionIcon;
