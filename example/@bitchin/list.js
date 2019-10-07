import React, { useEffect, useRef } from 'react';
import {
  string as str,
  node,
  oneOfType,
  func,
} from 'prop-types';
import { MDCList } from '@material/list';

const List = ({
  className = '',
  component: Comp = 'ul',
  ...props
}) => {
  const ref = useRef();
  useEffect(
    () => {
      MDCList.attachTo(ref.current);
    },
    [],
  );

  return (
    <Comp
      className={`mdc-list ${className}`.trimRight()}
      ref={ref}
      {...props}
    />
  );
};

List.propTypes = {
  children: node,
  className: str,
  component: oneOfType([str, func]),
};

export default List;
