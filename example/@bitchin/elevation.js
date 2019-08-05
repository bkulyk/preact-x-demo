import React from 'react';
import { oneOf, string as str, node } from 'prop-types';

const Elevation = ({
  z = 1,
  className = '',
  children,
  ...props,
}) => (
  <div
    className={`mdc-elevation-transition mdc-elevation--z${z} ${className}`.trimRight()}
    {...props}
  >
    {children}
  </div>
);

const depthValues = [...(new Array(25))].map((_, i) => i);

Elevation.propTypes = {
  children: node.isRequired,
  z: oneOf(depthValues),
  className: str,
};

export default Elevation;
