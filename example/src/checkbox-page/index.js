import React, { Fragment, useState } from 'react';
import { Typography, Checkbox } from '@bitchin/react-material-web';
import Example from '../example';

const CheckboxPage = () => {
  const [on, setOn] = useState(false);

  return (
    <Fragment>
      <Typography component="h2" use="headline4">Checkboxes</Typography>

      <Typography component="h3" use="headline5">Simple</Typography>
      <Example>
        <Checkbox
          label="on/off"
          id="simple"
        />
      </Example>

      <Typography component="h3" use="headline5">Indeterminate</Typography>
      <Example>
        <Checkbox
          label="unknown/on/off"
          indeterminate
          id="ind"
        />
      </Example>

      <Typography component="h3" use="headline5">Controlled</Typography>
      <Example>
        <Checkbox
          label={on ? 'on' : 'off'}
          id="controlled"
          checked={on}
          onChange={() => setOn(!on)}
        />
      </Example>

      <Typography component="h3" use="headline5">Disabled</Typography>
      <Example>
        <Checkbox
          label="on/off"
          disabled
          id="disabled"
        />
      </Example>
    </Fragment>
  );
};

export default CheckboxPage;
