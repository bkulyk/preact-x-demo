
import React, { Fragment } from 'react';

const Theme = () => {
  const [x, setX] = React.useState('default');
  console.log(x);
  return (
    <Fragment>
      <link href="/material-components-web.min.css" rel="stylesheet" />
      <style type="text/css" dangerouslySetInnerHTML={{__html: `
        :root {
          --mdc-theme-primary: #fcb8ab; /* The theme primary color */
          --mdc-theme-secondary: #feeae6; /* The theme secondary color */
          --mdc-theme-background: asdf; /* The theme background color */
          --mdc-theme-surface: asdf; /* The theme surface color */
          --mdc-theme-on-primary: asdf; /* Text color on top of a primary background */
          --mdc-theme-on-secondary: asdf; /* Text color on top of a secondary background  */
          --mdc-theme-on-surface: asdf; /* Text color on top of a surface background */
          --mdc-theme-text-<TEXT_STYLE>-on-light: asdf; /* Text color for TEXT_STYLE on top of light background. */
          --mdc-theme-text-<TEXT_STYLE>-on-dark: asdf; /* Text color for TEXT_STYLE on top of dark background. */
          /* <TEXT_STYLE> is one of primary, secondary, hint, disabled, icon
          https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=a78fd6&secondary.color=a31616
          */
        }
      `}} />
    </Fragment>
  );
};

export default Theme;
