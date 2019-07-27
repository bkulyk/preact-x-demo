import React, { Fragment } from 'react';
import ExpansionPanel from '../expansion-panel';

export default () => (
  <Fragment>
    <h2>Expansion Panel Demo</h2>
    <div>
      <ExpansionPanel summary="Expansion Panel 1" details="A very simple details section" />
      <ExpansionPanel
        summary="Expansion Panel 2"
        details={(
          <div>
            <h4>details section with content</h4>
            <p>blah blah</p>
            <p>blah blah blah blah blah blah blah blah</p>
          </div>
        )}
      />
    </div>
  </Fragment>
);