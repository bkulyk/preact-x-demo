import React, { useRef, useEffect, cloneElement } from 'react';
import clsx from 'clsx';
import { string as str, bool, node } from 'prop-types';
import { MDCTextField } from '@material/textfield';
import OutlineLabel from './outline-label';
import RippleLine from './ripple-line';
import HelperLine from './helper-line';
import Input from './input';

const makeIcon = icon => (icon
  ? cloneElement(icon, { className: 'mdc-text-field__icon' })
  : ''
);

const TextField = ({
  id,
  invalid = false,
  className = '',
  fullWidth = false,
  outlined = false,
  label = '',
  help = '',
  leadingIcon = '',
  trailingIcon = '',
  children = '',
  textarea = false,
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
    /* eslint no-new: off */
    new MDCTextField(ref.current);
  }, []);

  const classNames = clsx(
    className,
    'mdc-text-field',
    {
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--fullwidth': fullWidth,
      'mdc-text-field--outlined': outlined && !fullWidth,
      'mdc-text-field--with-leading-icon': leadingIcon,
      'mdc-text-field--with-trailing-icon': trailingIcon,
      'mdc-text-field--no-label': fullWidth || !label,
      'mdc-text-field--invalid': invalid,
    },
  );

  return (
    <div className="text-field-container">
      <div className={classNames} {...props} ref={ref}>
        {makeIcon(leadingIcon)}
        {makeIcon(trailingIcon)}
        {
          !children
            ? (<Input {...props} textarea={textarea} label={label} />)
            : children
        }
        {
          label && !outlined && !fullWidth
            ? (<label className="mdc-floating-label" htmlFor={id}>{label}</label>)
            : ''
        }
        {
          outlined
            ? <OutlineLabel id={id}>{label}</OutlineLabel>
            : <RippleLine>{label}</RippleLine>
        }
      </div>
      {
        help
          ? (<HelperLine>{help}</HelperLine>)
          : ''
      }
    </div>
  );
};

TextField.propTypes = {
  className: str,
  id: str.isRequired,
  invalid: bool,
  fullWidth: bool,
  outlined: bool,
  label: str,
  help: str,
  trailingIcon: node,
  leadingIcon: node,
  children: node,
  textarea: bool,
};

export default TextField;
