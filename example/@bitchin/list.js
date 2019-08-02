import React from 'react';
import { string as str, node } from 'prop-types';

const List = ({
  className = '',
  component: Comp = 'ul',
  children = '',
  ...props,
}) => (
  <Comp className={`${className} mdc-list`} {...props}>
    {children}
  </Comp>
);

List.propTypes = {
  component: str,
  children: node,
  className: str,
};

export default List;
