import React from 'react';
import { string as str, shape, bool } from 'prop-types';
import clsx from 'clsx';

const ImageListItem = ({
  src,
  alt,
  label = '',
  style = {},
  aspectContainer = true,
  ...props
}) => {
  const classNames = clsx({ 'mdc-image-list__image-aspect-container': aspectContainer });
  return (
    <li className="mdc-image-list__item" style={style}>
      <div className={classNames}>
        <img
          className="mdc-image-list__image"
          src={src}
          alt={alt}
          {...props}
        />
      </div>
      {label && (
        <div className="mdc-image-list__supporting">
          <span className="mdc-image-list__label">{label}</span>
        </div>
      )}
    </li>
  );
};

ImageListItem.propTypes = {
  src: str.isRequired,
  alt: str.isRequired,
  aspectContainer: bool,
  label: str,
  style: shape(),
};

export default ImageListItem;
