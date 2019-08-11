import React from 'react';

const HelperLine = ({ className = '', ...props }) => (
  <div className="mdc-text-field-helper-line">
    <p
      className={`mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg ${className}`.trimRight()}
      {...props}
    />
  </div>
);

export default HelperLine;
