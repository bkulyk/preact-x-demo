import React, { Fragment } from 'react';
import { Button, ButtonIcon, Typography } from '@bitchin/react-material-web';
import Example from '../example';

const Eg = ({ ...props }) => (
  <div style={{ margin: '10px 20px 10px', display: 'inline-block' }} {...props} />
);

const ButtonDemo = () => (
  <Fragment>
    <Typography component="h3" use="headline5">Raised Button</Typography>
    <Example>
      <Eg><Button raised>Default</Button></Eg>
      <Eg><Button raised secondary>Secondary</Button></Eg>
      <Eg><Button dense raised>Dense</Button></Eg>
      <Eg><Button disabled raised>Disabled</Button></Eg>
      <Eg>
        <Button raised>
          <ButtonIcon>person</ButtonIcon>
          Icon
        </Button>
      </Eg>
    </Example>

    <Typography component="h3" use="headline5">Without Ripple</Typography>
    <Example>
      <Eg><Button ripple={false}>Default</Button></Eg>
      <Eg><Button ripple={false} secondary>Secondary</Button></Eg>
      <Eg><Button ripple={false} disabled>Disabled</Button></Eg>
      <Eg>
        <Button ripple={false}>
          <ButtonIcon>favorite</ButtonIcon>
          Icon
        </Button>
      </Eg>
    </Example>

    <Typography component="h3" use="headline5">Text Buttons</Typography>
    <Example>
      <Eg><Button href="/">Default</Button></Eg>
      <Eg><Button href="/" secondary>Secondary</Button></Eg>
      <Eg><Button href="/" dense>Dense</Button></Eg>
      <Eg><Button href="/" disabled>Disabled</Button></Eg>
      <Eg>
        <Button href="/">
          <ButtonIcon>person</ButtonIcon>
          Icon
        </Button>
      </Eg>
    </Example>

    <Typography component="h3" use="headline5">Unelevated Button</Typography>
    <Example>
      <Eg><Button unelevated>Default</Button></Eg>
      <Eg><Button unelevated secondary>Secondary</Button></Eg>
      <Eg><Button unelevated dense>Dense</Button></Eg>
      <Eg><Button unelevated disabled>Disabled</Button></Eg>
      <Eg>
        <Button unelevated>
          <ButtonIcon>person</ButtonIcon>
          Icon
        </Button>
      </Eg>
    </Example>

    <Typography component="h3" use="headline5">Outlined Button</Typography>
    <Example>
      <Eg><Button outlined>Default</Button></Eg>
      <Eg><Button outlined secondary>Secondary</Button></Eg>
      <Eg><Button outlined dense>Dense</Button></Eg>
      <Eg><Button outlined disabled>Disabled</Button></Eg>
      <Eg>
        <Button outlined>
          <ButtonIcon>person</ButtonIcon>
          Icon
        </Button>
      </Eg>
    </Example>
  </Fragment>
);

export default ButtonDemo;
