import React, { Fragment } from 'react';
// import ExpansionPanel from '@bitchin/react-material-web/esm/expansion-panel';
// import Typography from '@bitchin/react-material-web/esm/typography';
import {
  ExpansionPanel,
  Typography
} from '@bitchin/react-material-web/esm';

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

export default () => (
  <Fragment>
    <h2>Expansion Panel Demo</h2>
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