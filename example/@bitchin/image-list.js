import React, { cloneElement } from 'react';
import {
  string as str,
  number as num,
  bool,
  shape,
  node,
} from 'prop-types';
import clsx from 'clsx';

const toArray = elements => [].concat(elements);

const ImageList = ({
  masonry = false,
  textProtection = false,
  className = '',
  columnCount = 5,
  columnGap = '16px',
  style = {},
  children,
  ...props
}) => {
  const classNames = clsx(
    className,
    'mdc-image-list',
    {
      'mdc-image-list--masonry': masonry,
      'mdc-image-list--with-text-protection': textProtection,
    },
  );

  const listStyle = {
    ...style,
    columnCount,
    columnGap,
  };

  return (
    <ul
      className={classNames}
      style={listStyle}
      {...props}
    >
      {toArray(children)
        .map(e => cloneElement(e, { aspectContainer: !masonry }))}
    </ul>
  );
};

ImageList.propTypes = {
  masonry: bool,
  textProtection: bool,
  className: str,
  columnCount: num,
  columnGap: str,
  children: node,
  style: shape(),
};

export default ImageList;
