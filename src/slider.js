import React, { useRef, useEffect } from 'react';
import {
  string as str,
  bool,
  number as num,
  func,
} from 'prop-types';
import clsx from 'clsx';
import { MDCSlider } from '@material/slider';

const Slider = ({
  label = '',
  discrete = false,
  min = 0,
  max = 100,
  value = 0,
  tabIndex = 0,
  step = null,
  markers = false,
  disabled = false,
  onChange = () => {},
}) => {
  const ref = useRef();

  useEffect(() => {
    const slider = new MDCSlider(ref.current);
    slider.listen('MDCSlider:change', () => onChange(slider.value));
  }, []);

  const classNames = clsx(
    'mdc-slider',
    { 'mdc-slider--discrete': discrete },
    { 'mdc-slider--display-markers': markers },
  );

  return (
    <div
      ref={ref}
      className={classNames}
      tabIndex={tabIndex}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled ? 'true' : null}
      {...(step ? { 'data-step': step } : {})}
      {...(label ? { 'aria-label': label } : {})}
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track" />
        {
          markers && discrete
            ? (<div className="mdc-slider__track-marker-container" />)
            : ''
        }
      </div>
      <div className="mdc-slider__thumb-container">
        { discrete
          ? (
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker" />
            </div>
          )
          : ''
        }
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>
        <div className="mdc-slider__focus-ring" />
      </div>
    </div>
  );
};

Slider.propTypes = {
  label: str,
  discrete: bool,
  min: num,
  max: num,
  value: num,
  tabIndex: num,
  step: num,
  markers: bool,
  disabled: bool,
  onChange: func,
};

export default Slider;
