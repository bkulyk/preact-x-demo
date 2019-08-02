import React from 'react';
import {
  string as str,
  node,
  component as comp,
  oneOf,
} from 'prop-types';

const ListItem = ({
  component: Comp = 'li',
  className = '',
  children,
  ...props,
}) => (
  <Comp className={`mdc-list-item ${className}`} {...props}>{children}</Comp>
);

ListItem.propTypes = {
  component: oneOf([str, comp]),
  children: node.isRequired,
  className: str,
};

export default ListItem;
