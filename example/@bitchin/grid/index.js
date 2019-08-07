import React from 'react';
import clsx from 'clsx';
import {
  oneOf,
  node,
  bool,
  string as str,
} from 'prop-types';

const Grid = ({
  align = 'center',
  children,
  fixedColumnWidth = false,
  className = '',
  ...props,
}) => {
  const classNames = clsx(
    className,
    'mdc-layout-grid',
    {
      [`mdc-layout-grid__cell--align-${align}`]: align !== 'center',
      'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
    },
  );

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  align: oneOf(['center', 'left', 'right']),
  fixedColumnWidth: bool,
  children: node.isRequired,
  className: str,
};

export default Grid;
