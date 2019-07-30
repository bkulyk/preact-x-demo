import React, { Fragment } from 'react';
import { Button, ButtonIcon } from '@bitchin/react-material-web';

const ButtonDemo = () => (
  <Fragment>
    <h2>Button Demos</h2>

    <h3>Raised button</h3>
    <Button ripple={false} raised>Default</Button>
    <Button ripple={false} dense raised>Dense</Button>
    <Button ripple={false} disabled raised>Disabled</Button>
    <Button ripple={false} raised>
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
    <Button ripple={false} href="/">Default</Button>
    <Button ripple={false} href="/" dense>Dense</Button>
    <Button ripple={false} href="/" disabled>Disabled</Button>
    <Button ripple={false} href="/">
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <h3>Unelevated button</h3>
    <Button ripple={false} unelevated>Default</Button>
    <Button ripple={false} unelevated dense>Dense</Button>
    <Button ripple={false} unelevated disabled>Disabled</Button>
    <Button ripple={false} unelevated>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <h3>Outlined button</h3>
    <Button ripple={false} outlined>Default</Button>
    <Button ripple={false} outlined dense>Dense</Button>
    <Button ripple={false} outlined disabled>Disabled</Button>
    <Button ripple={false} outlined>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>
  </Fragment>
);

export default ButtonDemo;
