import React from 'react';
import { baseName } from '../config';
import Example from '../example';

const Demo = ({ path }) => (
  <Example>
    <iframe
      src={`${baseName}${path}`}
      style={{ border: 'none', width: '100%', height: '100px' }}
    />
  </Example>
);

export default Demo;