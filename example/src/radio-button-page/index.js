import React, { Fragment } from 'react';
import { Typography, RadioButton } from '@bitchin/react-material-web';
import Example from '../example';

const Eg = ({ ...props }) => (
  <span style={{ marginRight: '15px' }} {...props} />
);

const SliderPage = () => (
  <Fragment>
    <Typography use="headline4" component="h2">Radio Buttons</Typography>

    <Typography use="headline5" component="h3">Simple</Typography>
    <Example>
      <Eg>
        <RadioButton label="on" id="simple-on" name="simple" />
      </Eg>
      <Eg>
        <RadioButton label="off" id="simple-off" name="simple" />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">No Label</Typography>
    <Example>
      <Eg>
        <RadioButton id="no-label-on" name="no-label" />
      </Eg>
      <Eg>
        <RadioButton id="no-label-off" name="no-label" />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Disabled</Typography>
    <Example>
      <Eg>
        <RadioButton id="no-label-on" label="on" disabled />
      </Eg>
      <Eg>
        <RadioButton id="no-label-off" label="off" disabled />
      </Eg>
    </Example>
  </Fragment>
);

export default SliderPage;
