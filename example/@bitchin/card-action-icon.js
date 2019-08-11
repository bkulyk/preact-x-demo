import React from 'react';
import { string as str, node } from 'prop-types';
import Button from './button';

const CardActionIcon = ({
  children,
  className = '',
  ...props
}) => (
  <Button
    className={`mdc-icon-button mdc-card__action mdc-card__action--icon ${className}`.trimRight()}
    {...props}
  >
    <i className="material-icons mdc-icon-button__icon">
      {children}
    </i>
  </Button>
);

CardActionIcon.propTypes = {
  children: node.isRequired,
  className: str,
};

export default CardActionIcon;
