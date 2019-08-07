import React, { Fragment } from 'react';
import { BaseFonts, Theme } from '@bitchin/react-material-web';
import { theme } from './config';

const ThemeDemo = () => (
  <Fragment>
    <BaseFonts />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/material-components-web/3.1.0/material-components-web.min.css" rel="stylesheet" />
    <Theme {...theme} />
  </Fragment>
);

export default ThemeDemo;
