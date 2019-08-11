import React from 'react';
import clsx from 'clsx';
import {
  oneOf,
  number as num,
  bool,
  string as str,
} from 'prop-types';

const Cell = ({
  span = null,
  desktop = null,
  tablet = null,
  phone = null,
  order = null,
  className = '',
  align = 'top',
  fixedWidth = false,
  ...props
}) => {
  const classNames = clsx([
    className,
    'mdc-layout-grid__cell',
    {
      [`mdc-layout-grid__cell--span-${span}`]: span,
      [`mdc-layout-grid__cell--order-${order}`]: order,
      [`mdc-layout-grid__cell--align-${align}`]: align,
      [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
      [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
      [`mdc-layout-grid__cell--span-${phone}-phone`]: phone,
      'mdc-layout-grid--fixed-column-width': fixedWidth,
    },
  ]);
  return (
    <div className={classNames} {...props} />
  );
};

Cell.propTypes = {
  align: oneOf(['top', 'middle', 'bottom']),
  span: num,
  desktop: num,
  tablet: num,
  phone: num,
  order: num,
  className: str,
  fixedWidth: bool,
};

export default Cell;
