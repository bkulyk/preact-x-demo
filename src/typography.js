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
  component: Component,
  children,
  use,
  ellipsis,
  className,
  style,
  ...props
}) => {
  const classNames = clsx(
    'mdc-typography-base',
    `mdc-typography--${use}`,
    { 'mdc-typography-overflow-ellipsis': ellipsis },
    className,
  );

  return (
    <Component className={classNames} style={style} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  children: propTypes.node.isRequired,
  component: propTypes.component,
  use: propTypes.oneOf(typographyStyles),
  ellipsis: propTypes.bool,
  topDistance: propTypes.number,
  bottomDistance: propTypes.number,
  className: propTypes.string,
  style: propTypes.shape,
};

Typography.defaultProps = {
  component: 'span',
  ellipsis: false,
  topDistance: 0,
  bottomDistance: 0,
  className: '',
  style: {},
  use: 'body1',
};

export default Typography
