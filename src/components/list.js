import React from 'react';
import PropTypes from 'prop-types';

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
  component: PropTypes.component,
  children: PropTypes.node,
};

List.defaultProps = {
  component: 'ul',
  children: '',
  className: '',
};

export default List;
