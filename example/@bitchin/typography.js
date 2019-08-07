import React from 'react';
import propTypes from 'prop-types';
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
  component: propTypes.oneOfType([propTypes.string, propTypes.func]),
  children: propTypes.node.isRequired,
  use: propTypes.oneOf(typographyStyles),
  ellipsis: propTypes.bool,
  className: propTypes.string,
};

export default Typography;
