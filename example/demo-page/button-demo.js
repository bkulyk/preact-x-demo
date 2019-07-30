import React, { Fragment } from 'react';
import { Button, ButtonIcon } from '@bitchin/react-material-web';

const ButtonDemo = () => (
  <Fragment>
    <h2>Button Demos</h2>

    <h3>Raised button</h3>
    <Button raised>Default</Button>
    <Button dense raised>Dense</Button>
    <Button disabled raised>Disabled</Button>
    <Button raised>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <h3>Without Ripple</h3>
    <Button ripple={false} >Default</Button>
    <Button ripple={false} disabled>Disabled</Button>
    <Button ripple={false}>
      <ButtonIcon>favorite</ButtonIcon>
      Icon
    </Button>

    <h3>Text Buttons</h3>
    <Button href="/">Default</Button>
    <Button href="/" dense>Dense</Button>
    <Button href="/" disabled>Disabled</Button>
    <Button href="/">
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <h3>Unelevated button</h3>
    <Button unelevated>Default</Button>
    <Button unelevated dense>Dense</Button>
    <Button unelevated disabled>Disabled</Button>
    <Button unelevated>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <h3>Outlined button</h3>
    <Button outlined>Default</Button>
    <Button outlined dense>Dense</Button>
    <Button outlined disabled>Disabled</Button>
    <Button outlined>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>
  </Fragment>
);

export default ButtonDemo;
