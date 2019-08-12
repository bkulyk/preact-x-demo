import React from 'react';
import {
  string as str,
  component as comp,
  oneOf,
} from 'prop-types';

const ListItem = ({
  component: Comp = 'li',
  className = '',
  ...props
}) => (
  <Comp className={`mdc-list-item ${className}`.trimRight()} {...props} />
);

ListItem.propTypes = {
  component: oneOf([str, comp]),
  className: str,
};

export default ListItem;
