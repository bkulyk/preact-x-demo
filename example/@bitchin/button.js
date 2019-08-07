/* eslint react/button-has-type: off */
import React, { Fragment } from 'react';
import {
  node,
  func,
  bool,
  string as str,
  oneOf,
} from 'prop-types';
import clsx from 'clsx';
import Ripple from'./ripple';

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
  secondary,
  href,
}) => {
  const classes = clsx(
    'mdc-button',
    className,
    {
      'mdc-button--raised': raised && !outlined && !href,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense,
      'mdc-button--unelevated': unelevated,
      'mdc-theme--on-secondary': raised && secondary && !href && !outlined,
      'mdc-theme--secondary': secondary,
    }
  );

  const Wrapper = ripple ? Ripple : Fragment;

  return (
    <Wrapper>
      <button className={classes} type={type} onClick={onClick} disabled={disabled}>
        <span className="mdc-button__label">
          {children}
        </span>
      </button>
    </Wrapper>
  );
};

Button.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  children: node,
  onClick: func,
  className: str,
  raised: bool,
  ripple: bool,
  disabled: bool,
  outlined: bool,
  dense: bool,
  unelevated: bool,
  secondary: bool,
  href: str,
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
  secondary: false,
};

export default Button;
