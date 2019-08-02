import React from 'react';
import {
  component as comp,
  string as str,
  node,
} from 'prop-types';

const ListItem = ({
  component: Component,
  className,
  children,
  ...props,
}) => (
  <Component className={`mdc-list-item ${className}`} {...props}>{children}</Component>
);

ListItem.propTypes = {
  component: comp,
  children: node.isRequired,
  className: str,
};

ListItem.defaultProps = {
  component: 'li',
  className: '',
};

export default ListItem;
