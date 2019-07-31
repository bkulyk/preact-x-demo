import React, { Fragment } from 'react';
import { Typography, ExpansionPanel } from '@bitchin/react-material-web';

const SampleContent = () => (
  <div>
    <Typography component="p">details section with content</Typography>
    <Typography component="p">
      blah blah
      <br/>
      blah blah blah blah blah blah blah blah
    </Typography>
  </div>
);

const ExpansionDemo = () => (
  <Fragment>
    <Typography component="h2" use="headline4">Expansion Panel Demo</Typography>
    <div>
      <ExpansionPanel summary="Expansion Panel 1" details={(<Typography>A very simple details section</Typography>)} />
      <ExpansionPanel
        summary="Expansion Panel 2"
        details={(<SampleContent />)}
      />
      <ExpansionPanel
        summary="Expansion Panel 3"
        disabled
        details={(<SampleContent />)}
      />
    </div>
  </Fragment>
);

export default ExpansionDemo;
