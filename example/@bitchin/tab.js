import React from 'react';
import clsx from 'clsx';
import { bool, string as str } from 'prop-types';

const Tab = ({
  label,
  icon = null,
  active = false,
  stacked = false,
  ...props
}) => {
  const classNames = clsx(
    'mdc-tab',
    {
      'mdc-tab--stacked': stacked,
      'mdc-tab--active': active,
    },
  );
  const indicatorClassNames = clsx(
    'mdc-tab-indicator',
    { 'mdc-tab-indicator--active': active },
  );

  return (
    <button className={classNames} role="tab" aria-selected="true" tabIndex="0" type="button" {...props}>
      <span className="mdc-tab__content">
        {
          icon
            ? (<span className="mdc-tab__icon material-icons" aria-hidden="true">{icon}</span>)
            : ''
        }
        <span className="mdc-tab__text-label">{label}</span>
      </span>
      <span className={indicatorClassNames}>
        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
      </span>
      <span className="mdc-tab__ripple" />
    </button>
  );
};

Tab.propTypes = {
  label: str.isRequired,
  icon: str,
  active: bool,
  stacked: bool,
};

export default Tab;
