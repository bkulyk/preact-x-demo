import React from 'react';

const RippleStuff = ({ children }) => (
  <div className="mdc-line-ripple">
    <div className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg">
      {children}
    </div>
  </div>
);

export default RippleStuff;
