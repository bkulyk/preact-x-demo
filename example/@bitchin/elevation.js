import React from 'react';
import { oneOf, string as str, node } from 'prop-types';

const Elevation = ({
  z = 1,
  className = '',
  ...props
}) => (
  <div
    className={`mdc-elevation-transition mdc-elevation--z${z} ${className}`.trimRight()}
    {...props}
  />
);

const depthValues = [...(new Array(25))].map((_, i) => i);

Elevation.propTypes = {
  z: oneOf(depthValues),
  className: str,
};

export default Elevation;
