import React, { useEffect, useRef } from 'react';
import {
  string as str,
  bool,
} from 'prop-types';
import { MDCSwitch } from '@material/switch';
import clsx from 'clsx';
import Typography from './typography';

const Switch = ({
  id,
  label = '',
  checked = null,
  disabled = false,
  className = '',
  ...props,
}) => {
  const ref = useRef();

  useEffect(() => {
    new MDCSwitch(ref.current);
  }, []);

  const classNames = clsx(
    className,
    'mdc-switch',
    {
      'mdc-switch--disabled': disabled,
      'mdc-switch--checked': checked,
    },
  )

  return (
    <div>
      <div className={classNames} ref={ref}>
        <div className="mdc-switch__track" />
        <div className="mdc-switch__thumb-underlay">
          <div className="mdc-switch__thumb">
            <input
              type="checkbox"
              id={id}
              className="mdc-switch__native-control"
              role="switch"
              {...(checked !== null ? { checked } : {} )}
              {...props}
            />
          </div>
        </div>
      </div>
      {label
        ? (<label htmlFor={id} style={{ marginLeft: '10px' }}><Typography>{label}</Typography></label>)
        : ''
      }
    </div>
  );
};

Switch.propTypes = {
  label: str,
  id: str.isRequired,
  checked: bool,
  disabled: bool,
  className: str,
};

export default Switch;
