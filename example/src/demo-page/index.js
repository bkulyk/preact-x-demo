import React, { Fragment } from 'react';
import CardDemo from './card-demo';
import ButtonDemo from './button-demo';
import ExpansionDemo from './expansion-demo';
import { Typography } from '@bitchin/react-material-web';

const DemoPage = () => (
  <Fragment>
    <Typography use="headline4">Demo Page</Typography>
    <ExpansionDemo />
    <CardDemo />
    <ButtonDemo />
  </Fragment>
);

export default DemoPage;
