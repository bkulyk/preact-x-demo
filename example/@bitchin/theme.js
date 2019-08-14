import React from 'react';
import { string as str } from 'prop-types';

const Theme = ({
  primary,
  secondary,
  background,
  surface,
  onPrimary,
  onSecondary,
  onSurface,
  onError,
}) => (
  <style type="text/css">
    {`
    :root {
      --mdc-theme-primary: ${primary}; /* The theme primary color */
      --mdc-theme-secondary: ${secondary}; /* The theme secondary color */
      --mdc-theme-background: ${background}; /* The theme background color */
      --mdc-theme-surface: ${surface}; /* The theme surface color */
      --mdc-theme-on-primary: ${onPrimary}; /* Text color on top of a primary background */
      --mdc-theme-on-secondary: ${onSecondary}; /* Text color on top of a secondary background  */
      --mdc-theme-on-surface: ${onSurface}; /* Text color on top of a surface background */
      --mdc-theme-on-error: ${onError}; /* Text color on top of a error background */
    }

    body {
      margin: 0px !important;
    }

    .mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic,
    .mdc-drawer .mdc-list-item--activated {
      color: var(--mdc-theme-secondary);
    }

    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
      color: var(--mdc-theme-primary);
    }

    .mdc-select.mdc-select--focused:not(.mdc-select--disabled) .mdc-select__dropdown-icon,
    .mdc-select.mdc-select--focused:not(.mdc-select--disabled) .mdc-floating-label {
      color: var(--mdc-theme-primary);
    }

    .mdc-select.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon,
    .mdc-select.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label {
      color: var(--mdc-theme-error);
    }
    `}
  </style>
);

Theme.propTypes = {
  primary: str.isRequired,
  secondary: str.isRequired,
  background: str.isRequired,
  surface: str.isRequired,
  onPrimary: str.isRequired,
  onSecondary: str.isRequired,
  onSurface: str.isRequired,
  onError: str.isRequired,
};

export default Theme;
