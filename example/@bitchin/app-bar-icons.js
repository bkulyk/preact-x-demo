import React, { cloneElement } from 'react';
import {
  string as str,
  node,
  arrayOf,
  oneOfType,
} from 'prop-types';

const toArray = elements => (
  Array.isArray(elements)
    ? elements
    : [elements]
);

const AppBarIcons = ({
  className = '',
  children = '',
  ...props
}) => (
  <div
    className={`mdc-top-app-bar__section mdc-top-app-bar__section--align-end ${className}`.trimRight()}
    {...props}
  >
    {toArray(children).map((e, i) => cloneElement(
      e,
      {
        className: `${e.className || ''} mdc-top-app-bar__action-item`.trim(),
        key: `action-item-${i}`,
      },
    ))}
  </div>
);

AppBarIcons.propTypes = {
  className: str,
  children: oneOfType([node, arrayOf(node)]),
};

export default AppBarIcons;
