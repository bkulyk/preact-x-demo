import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  string as str,
  bool,
  oneOf,
} from 'prop-types';
import { MDCTextField } from '@material/textfield';
import OutlineStuff from './outline-stuff';
import RippleStuff from './ripple-stuff';
import HelperLine from './helper-line';

const TextField = ({
  id,
  className,
  fullWidth = false,
  placeholder = null,
  outlined = false,
  label = '',
  help = '',
  icon = '',
  iconPosition = 'leading',
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
    new MDCTextField(ref.current);
  }, []);

  const classNames = clsx(
    className,
    'mdc-text-field',
    {
      'mdc-text-field--fullwidth': fullWidth,
      'mdc-text-field--outlined': outlined && !fullWidth,
      [`mdc-text-field--with-${iconPosition}-icon`]: icon !== '',
      'mdc-text-field--no-label': fullWidth,
    }
  );

  return (
    <div className="text-field-container">
      <div className={classNames} {...props} ref={ref}>
        {
          icon
            ? <i className="material-icons mdc-text-field__icon">{icon}</i>
            : ''
        }

        <input className="mdc-text-field__input"
          type="text"
          placeholder={placeholder}
          aria-label={label}
          {...props}
        />
        {
          label && !outlined && !fullWidth
            ? (<label className="mdc-floating-label" htmlFor={id}>{label}</label>)
            : ''
        }
        {
          outlined
            ? <OutlineStuff id={id}>{label}</OutlineStuff>
            : <RippleStuff>{label}</RippleStuff>
        }
      </div>
      {
        help
          ? (<HelperLine>{help}</HelperLine>)
          : ''
      }
    </div>
  )
};

TextField.propTypes = {
  id: str.isRequired,
  placeholder: str,
  fullWidth: bool,
  outlined: bool,
  label: str,
  help: str,
  icon: str,
  iconPosition: oneOf(['leading', 'trailing']),
};

export default TextField;
