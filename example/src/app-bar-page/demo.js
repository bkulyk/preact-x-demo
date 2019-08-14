import React from 'react';
import { string as str } from 'prop-types';
import { baseName } from '../config';
import Example from '../example';

const Demo = ({ path, title = '' }) => (
  <Example>
    <iframe
      title={title}
      src={`${baseName}${path}`}
      style={{ border: 'none', width: '100%', height: '250px' }}
    />
  </Example>
);

Demo.propTypes = {
  path: str.isRequired,
  title: str,
};

export default Demo;
