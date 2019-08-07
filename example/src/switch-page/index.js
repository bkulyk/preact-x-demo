import React, { Fragment, useState } from 'react';
import { Typography, Switch } from '@bitchin/react-material-web';
import Example from '../example';

const SwitchPage = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Fragment>
      <Typography use="headline4" component="h2">Switches</Typography>

      <Typography use="headline5" component="h3">Basic Switch</Typography>
      <Example>
        <Switch label="on/off" id="basic" />
      </Example>

      <Typography use="headline5" component="h3">Controlled Switch</Typography>
      <Example>
        <Switch
          label="on/off"
          checked={toggled}
          onChange={() => setToggled(!toggled)}
          id="controlled"
        />
        <Typography component="p">
          Toggled to:
          {' '}
          {toggled ? 'on' : 'off'}
        </Typography>
      </Example>

      <Typography use="headline5" component="h3">Disabled</Typography>
      <Example>
        <Switch
          label="on/off"
          checked
          onChange={() => {}}
          disabled
          id="disabled"
        />
      </Example>

      <Typography use="headline5" component="h3">No Label</Typography>
      <Example>
        <Switch id="no-label" />
      </Example>
    </Fragment>
  );
};

export default SwitchPage;
