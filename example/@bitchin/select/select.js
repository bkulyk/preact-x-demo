import React, {
  Fragment,
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  string as str,
  bool,
  arrayOf,
  shape,
  func,
  oneOfType,
} from 'prop-types';
import clsx from 'clsx';
import { MDCSelect } from '@material/select';
import EnhancedInput from './enhanced';
import StandardInput from './standard';
import Outline from '../outline';
import HelperLine from '../helper-line';

const Select = ({
  id,
  label = '',
  value = null,
  outlined = false,
  enhanced = false,
  disabled = false,
  required = null,
  icon = null,
  valid = true,
  options = [],
  help = '',
  onChange = () => {},
  style = {},
  ...props
}) => {
  const [select, setSelect] = useState();

  const ref = useRef();
  const LabelWrapper = (outlined ? Outline : Fragment);
  const Input = (enhanced ? EnhancedInput : StandardInput);
  const classNames = clsx(
    'mdc-select',
    {
      'mdc-select--outlined': outlined,
      'mdc-select--disabled': disabled,
      'mdc-select--with-leading-icon': icon,
    },
  );

  useEffect(() => {
    const sel = new MDCSelect(ref.current);
    sel.required = required;
    sel.listen('MDCSelect:change', e => onChange(sel.value, e));
    sel.value = value;
    sel.required = required;
    sel.leadingIconContent = icon;
    setSelect(sel);
  }, []);

  useEffect(() => {
    if (select) {
      select.value = value;
      select.valid = valid;
    }
  }, [value, valid]);

  return (
    <Fragment>
      <div className={classNames} ref={ref} style={style}>
        {
          icon
            ? (<i className="material-icons mdc-select__icon" tabIndex="0" role="button">{icon}</i>)
            : ''
        }
        <i className="mdc-select__dropdown-icon material-icons">arrow_drop_down</i>
        <Input disabled={disabled} options={options} {...props} />

        <LabelWrapper>
          <label htmlFor={id} className="mdc-floating-label">{label}</label>
        </LabelWrapper>

        <div className="mdc-line-ripple" />
      </div>
      {
        help
          ? (<HelperLine>{help}</HelperLine>)
          : ''
      }
    </Fragment>
  );
};

Select.propTypes = {
  id: str.isRequired,
  value: str,
  label: str,
  icon: str,
  outlined: bool,
  enhanced: bool,
  disabled: bool,
  required: bool,
  options: oneOfType([arrayOf(str), shape()]),
  onChange: func,
  valid: bool,
  style: shape(),
  help: str,
};

export default Select;
