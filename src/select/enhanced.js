import React, { Fragment } from 'react';
import {
  string as str,
  oneOfType,
  arrayOf,
  shape,
} from 'prop-types';
import fixOptions from './fix-options';

const Enhanced = ({
  options,
  value,
}) => {
  const optionsObj = fixOptions(options);

  return (
    <Fragment>
      <div className="mdc-select__selected-text">{value}</div>
      <div className="mdc-select__menu mdc-menu mdc-menu-surface">
        <ul className="mdc-list">
          <li className="mdc-list-item" data-value="" />

          {Object.keys(optionsObj).map(k => (
            <li className="mdc-list-item" data-value={k} key={optionsObj[k]}>{optionsObj[k]}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

Enhanced.propTypes = {
  options: oneOfType([arrayOf(str), shape()]),
  value: str,
};

export default Enhanced;
