import React from 'react';
import { node } from 'prop-types';

const Example = ({ children }) => (
  <div style={{ backgroundColor: '#d1b2fe', padding: '16px', margin: '0px -16px' }}>
    {children}
  </div>
);

Example.propTypes = {
  children: node.isRequired,
};

export default Example;
