import React from 'react';

const componentWithClass = (Component, baseClassName) => ({
  className = '',
  ...props
}) => (
  <Component {...props} className={`${baseClassName} ${className}`.trim()} />
);

export default componentWithClass;
