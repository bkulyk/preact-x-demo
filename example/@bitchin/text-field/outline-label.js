import React from 'react';
import { node, string as str } from 'prop-types';

const OutlineLabel = ({ children, id }) => (
  <div className="mdc-notched-outline">
    <div className="mdc-notched-outline__leading" />
    <div className="mdc-notched-outline__notch" >
      <label className="mdc-floating-label" htmlFor={id}>
        {children}
      </label>
    </div>
    <div className="mdc-notched-outline__trailing" />
  </div>
);

OutlineLabel.propTypes = {
  children: node.isRequired,
  id: str.isRequired,
};

export default OutlineLabel;
