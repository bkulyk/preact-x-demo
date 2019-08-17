import React from 'react';
import { bool } from 'prop-types';

const ImageList = ({
  masonary = false,
  textProtection = false, 
  ...props
}) => (
  <ul className="mdc-image-list my-image-list" {...props} />
);

ImageList.propTypes = {
  masonary: bool,
  textProtection: bool,
}

export default ImageList;
