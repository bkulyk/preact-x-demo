import React from 'react';

const HelperLine = ({ children }) => (
  <div className="mdc-text-field-helper-line">
    <p className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg">
      {children}
    </p>
  </div>
);

export default HelperLine;
