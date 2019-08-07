import React from 'react';
import { node, shape } from 'prop-types';
import { Elevation } from '@bitchin/react-material-web';

const Example = ({ children, style = {} }) => (
  <Elevation
    style={{
      backgroundColor: 'white',
      padding: '16px',
      margin: '0px 32px',
      ...style,
    }}
  >
    {children}
  </Elevation>
);

Example.propTypes = {
  children: node.isRequired,
  style: shape(),
};

export default Example;
