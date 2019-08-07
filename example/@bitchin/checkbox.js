import React, { useRef, useEffect } from 'react';
import { string as str, bool } from 'prop-types';
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';
import clsx from 'clsx';

const Checkbox = ({
  className = '',
  label = '',
  disabled = false,
  indeterminate = false,
  id,
  ...props,
}) => {
  const checkboxRef = useRef();
  const fieldRef = useRef();

  useEffect(() => {
    const checkbox = new MDCCheckbox(checkboxRef.current);
    checkbox.indeterminate = indeterminate;
    const formField = new MDCFormField(fieldRef.current);
    formField.input = checkbox;
  }, []);

  const classNames = clsx(
    'mdc-checkbox',
    { 'mdc-checkbox--disabled': disabled },
  );

  return (
    <div className={`mdc-form-field ${className}`.trimRight()} ref={fieldRef}>
      <div className={classNames} ref={checkboxRef}>
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id={id}
          disabled={disabled}
          {...props}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
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

Checkbox.propTypes = {
  className: str,
  label: str,
  disabled: bool,
  indeterminate: bool,
  id: str.isRequired,
};

export default Checkbox;
