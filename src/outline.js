import React from 'react';

const Outline = ({ ...props }) => (
  <div className="mdc-notched-outline">
    <div className="mdc-notched-outline__leading" />
    <div className="mdc-notched-outline__notch" {...props} />
    <div className="mdc-notched-outline__trailing" />
  </div>
);

export default Outline;
