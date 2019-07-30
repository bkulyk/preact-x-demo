import React from 'react';
import propTypes from 'prop-types';

const List = ({
  className,
  component: Component,
  children,
  ...props,
}) => (
  <Component className={`${className} mdc-list`} {...props}>
    {children}
  </Component>
);

List.propTypes = {
  component: propTypes.component,
  children: propTypes.node,
  className: propTypes.string,
};

List.defaultProps = {
  component: 'ul',
  children: '',
  className: '',
};

export default List;
