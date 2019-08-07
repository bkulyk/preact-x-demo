import React from 'react';
import { node } from 'prop-types';

const GridInner = ({ children, ...props }) => (
  <div className="mdc-layout-grid__inner" {...props}>
    {children}
  </div>
);

GridInner.propTypes = {
  children: node.isRequired,
}

export default GridInner;
