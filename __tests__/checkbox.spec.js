import React from 'react';
import Checkbox from '@bitchin/checkbox';
import { shallow } from './enzyme';

it('render correctly with defaults', () => {
  expect(shallow(<Checkbox />)).toMatchSnapshot();
});

it('render correctly with indeterminate', () => {
  expect(shallow((
    <Checkbox
      label="on/off"
      indeterminate
      className="ind-class"
      id="ind-checkbox"
    />
  ))).toMatchSnapshot();
});

it('render correctly with some props', () => {
  expect(shallow((
    <Checkbox
      label="on/off"
      disabled
      className="extra-class"
      id="my-checkbox"
    />
  ))).toMatchSnapshot();
});
