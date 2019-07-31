import React, { Fragment } from 'react';
import { Button, ButtonIcon, Typography } from '@bitchin/react-material-web';

const ButtonDemo = () => (
  <Fragment>
    <Typography component="h2" use="headline4">Button Demo</Typography>

    <Typography component="h3" use="headline5">Raised Button</Typography>
    <Button raised>Default</Button>
    <Button dense raised>Dense</Button>
    <Button disabled raised>Disabled</Button>
    <Button raised>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <Typography component="h3" use="headline5">Without Ripple</Typography>
    <Button ripple={false} >Default</Button>
    <Button ripple={false} disabled>Disabled</Button>
    <Button ripple={false}>
      <ButtonIcon>favorite</ButtonIcon>
      Icon
    </Button>

    <Typography component="h3" use="headline5">Text Buttons</Typography>
    <Button href="/">Default</Button>
    <Button href="/" dense>Dense</Button>
    <Button href="/" disabled>Disabled</Button>
    <Button href="/">
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <Typography component="h3" use="headline5">Unelevated Button</Typography>
    <Button unelevated>Default</Button>
    <Button unelevated dense>Dense</Button>
    <Button unelevated disabled>Disabled</Button>
    <Button unelevated>
      <ButtonIcon>person</ButtonIcon>
      Icon
    </Button>

    <Typography component="h3" use="headline5">Outlined Button</Typography>
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
