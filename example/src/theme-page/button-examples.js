import React, { Fragment } from 'react';
import { Button, Typography } from '@bitchin/react-material-web';

const ButtonExamples = () => (
  <Fragment>
    <Button>Primary Button</Button>
    {' '}
    <Button className="mdc-theme--secondary-bg mdc-theme--on-secondary">Secondary Button</Button>
    {' '}
    <Button disabled>Disabled Button</Button>

    <Typography component="h4">Text Buttons</Typography>
    {' '}
    <Button href="#">Primary</Button>
    {' '}
    <Button href="#" className="mdc-theme--secondary">Secondary</Button>
    {' '}
    <Button href="#" disabled>Disabled</Button>
  </Fragment>
);

export default ButtonExamples;
