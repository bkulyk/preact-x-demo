import React from 'react';
import {
  string as str,
  node,
  oneOfType,
  func,
} from 'prop-types';

const List = ({
  className = '',
  component: Comp = 'ul',
  ...props
}) => (
  <Comp
    className={`mdc-list ${className}`.trimRight()}
    {...props}
  />
);

List.propTypes = {
  children: node,
  className: str,
  component: oneOfType([str, func]),
};

export default List;
