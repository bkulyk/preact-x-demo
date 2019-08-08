import React from 'react';
import { node, string as str } from 'prop-types';
import Outline from '../outline';

const OutlineLabel = ({ children, id }) => (
  <Outline>
    <label className="mdc-floating-label" htmlFor={id}>
      {children}
    </label>
  </Outline>
);

OutlineLabel.propTypes = {
  children: node.isRequired,
  id: str.isRequired,
};

export default OutlineLabel;
