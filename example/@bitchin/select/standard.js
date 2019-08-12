import React from 'react';
import {
  arrayOf,
  shape,
  oneOfType,
  string as str,
} from 'prop-types';
import fixOptions from './fix-options';

const Standard = ({
  options = [],
  ...props
}) => {
  const optionsObj = fixOptions(options);
  return (
    <select className="mdc-select__native-control" {...props}>
      <option value="" />
      {Object.keys(optionsObj).map(k => (
        <option value={k} key={optionsObj[k]}>{optionsObj[k]}</option>
      ))}
    </select>
  );
};

Standard.propTypes = {
  options: oneOfType([arrayOf(str), shape()]),
};

export default Standard;
