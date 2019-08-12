import React from 'react';
import { string as str } from 'prop-types';

const componentWithClass = (Component, baseClassName) => {
  const comp = ({
    className = '',
    ...props
  }) => (
    <Component {...props} className={`${baseClassName} ${className}`.trim()} />
  );

  comp.propTypes = {
    className: str,
  };

  return comp;
};


export default componentWithClass;
