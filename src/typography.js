import React from 'react';
import {
  oneOfType,
  oneOf,
  bool,
  string as str,
  func,
  node,
} from 'prop-types';
import clsx from 'clsx';

const typographyStyles = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
];

const Typography = ({
  component: Comp = 'span',
  children,
  use = 'body1',
  ellipsis = false,
  className = '',
  ...props
}) => {
  const classNames = clsx(
    className,
    'mdc-typography-base',
    `mdc-typography--${use}`,
    { 'mdc-typography-overflow-ellipsis': ellipsis },
  );

  return (
    <Comp className={classNames} {...props}>
      {children}
    </Comp>
  );
};

Typography.propTypes = {
  component: oneOfType([str, func]),
  children: node.isRequired,
  use: oneOf(typographyStyles),
  ellipsis: bool,
  className: str,
};

export default Typography;
