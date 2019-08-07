import React from 'react';
import clsx from 'clsx';
import {
  oneOf,
  num,
  bool,
  string as str,
} from 'prop-types';

const Cell = ({
  span = 1,
  desktop = false,
  tablet = false,
  phone = false,
  order = null,
  className = '',
  align = 'top',
  fixedWidth = false,
  ...props,
}) => {
  const classNames = clsx([
    className,
    'mdc-layout-grid__cell',
    {
      [`mdc-layout-grid__cell--span-${span}`]: span,
      [`mdc-layout-grid__cell--span-${desktop}`]: desktop,
      [`mdc-layout-grid__cell--span-${tablet}`]: tablet,
      [`mdc-layout-grid__cell--span-${phone}`]: phone,
      [`mdc-layout-grid__cell--order-${order}`]: order,
      [`mdc-layout-grid__cell--align-${align}`]: align,
      'mdc-layout-grid--fixed-column-width': fixedWidth,
    }
  ]);
  return (
    <div className={classNames} {...props}></div>
  );
};

Cell.propTypes = {
  align: oneOf(['top', 'middle', 'bottom']),
  span: num,
  desktop: bool,
  tablet: bool,
  phone: bool,
  order: num,
  className: str,
  fixedWidth: bool
};

export default Cell;
