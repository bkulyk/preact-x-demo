import React from 'react';
import { shape } from 'prop-types';
import { Elevation } from '@bitchin/react-material-web';

const Example = ({
  style = {},
  ...props
}) => (
  <Elevation
    style={{
      backgroundColor: 'white',
      padding: '16px',
      margin: '0px 32px',
      ...style,
    }}
    {...props}
  />
);

Example.propTypes = {
  style: shape(),
};

export default Example;
