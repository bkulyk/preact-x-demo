/* eslint react/button-has-type: off */
import React, { Fragment } from 'react';
import {
  node,
  func,
  bool,
  string as str,
  oneOf,
  shape,
} from 'prop-types';
import clsx from 'clsx';
import Ripple from './ripple';

const secondaryStyleFix = {
  borderColor: 'var(--mdc-theme-secondary, #018786)',
};

const Button = ({
  type = 'button',
  children = 'Submit',
  onClick = () => {},
  className = '',
  raised = true,
  ripple = true,
  disabled = false,
  outlined = false,
  dense = false,
  unelevated = false,
  secondary = false,
  href = null,
  style = {},
  ...props
}) => {
  const classes = clsx(
    'mdc-button',
    className,
    {
      'mdc-button--raised': raised && !outlined && !href,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense,
      'mdc-button--unelevated': unelevated,
      'mdc-theme--secondary-bg mdc-theme--on-secondary': raised && secondary && !href && !outlined,
      'mdc-theme--secondary': secondary,
    },
  );

  const Wrapper = ripple ? Ripple : Fragment;

  const buttonStyle = {
    ...style,
    ...(secondary ? secondaryStyleFix : {}),
  };
  return (
    <Wrapper>
      <button
        style={buttonStyle}
        className={classes}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
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
  style: shape(),
};

export default Button;
