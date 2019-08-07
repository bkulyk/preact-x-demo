import React from 'react';
import { string as stringType } from 'prop-types';

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

    .mdc-theme--secondary.mdc-button--raised:not(:disabled),
    .mdc-theme--secondary.mdc-button--unelevated:not(:disabled) {
      background-color: var(--mdc-theme-secondary);
      color: var(--mdc-theme-on-secondary);
    }

    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
      color: var(--mdc-theme-primary);
    }
    `}
  </style>
);

Theme.propTypes = {
  primary: stringType.isRequired,
  secondary: stringType.isRequired,
  background: stringType.isRequired,
  surface: stringType.isRequired,
  onPrimary: stringType.isRequired,
  onSecondary: stringType.isRequired,
  onSurface: stringType.isRequired,
  onError: stringType.isRequired,
}

export default Theme;
