import React from 'react';

const OutlineStuff = ({ children, id }) => (
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

export default OutlineStuff;
