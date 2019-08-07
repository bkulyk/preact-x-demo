import React from 'react';

const RippleLine = ({ ...props }) => (
  <div className="mdc-line-ripple">
    <div
      className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg"
      {...props}
    />
  </div>
);

export default RippleLine;
