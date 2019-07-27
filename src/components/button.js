/* eslint react/button-has-type: off */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MDCRipple } from '@material/ripple';

const Button = ({
  type,
  children,
  onClick,
  className,
  raised,
  ripple,
  disabled,
  outlined,
  dense,
  unelevated,
  href,
}) => {
  const ref = useRef();

  const classes = clsx(
    'mdc-button',
    className,
    {
      'mdc-button--raised': raised && !outlined && !href,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense,
      'mdc-button--unelevated': unelevated,
    }
  );

  useEffect(() => {
    if (ripple) {
      new MDCRipple(ref.current);
    }
  });

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled} ref={ref}>
      <span className="mdc-button__label">
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  raised: PropTypes.bool,
  ripple: PropTypes.bool,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  dense: PropTypes.bool,
  unelevated: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  children: 'Submit',
  className: '',
  raised: true,
  ripple: true,
  disabled: false,
  outlined: false,
  dense: false,
  unelevated: false,
  href: null,
};

export default Button;
