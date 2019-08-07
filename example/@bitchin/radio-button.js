import React, { useRef, useEffect } from 'react';
import {
  string as str,
  bool,
  shape,
} from 'prop-types';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import clsx from 'clsx';

const RadioButton = ({
  disabled = false,
  className = '',
  style = {},
  label = null,
  id,
  ...props
}) => {
  const fieldRef = useRef();
  const radioRef = useRef();

  useEffect(() => {
    const radio = new MDCRadio(radioRef.current);
    const formField = new MDCFormField(fieldRef.current);
    formField.input = radio;
  }, []);

  const classNames = clsx(
    className,
    'mdc-radio',
    { 'mdc-radio--disabled': disabled },
  );

  return (
    <div className="mdc-form-field" style={style} ref={fieldRef}>
      <div className={classNames} ref={radioRef}>
        <input
          className="mdc-radio__native-control"
          type="radio"
          id="radio-1"
          name="radios"
          disabled={disabled}
          {...props}
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
      {
        label
          ? (<label htmlFor={id}>{label}</label>)
          : ''
      }
    </div>
  );
};

RadioButton.propTypes = {
  disabled: bool,
  className: str,
  style: shape(),
  label: str,
  id: str.isRequired,
};

export default RadioButton;
