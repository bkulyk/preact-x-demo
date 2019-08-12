import React from 'react';
import BaseFonts from '@bitchin/base-fonts';
import { shallow } from './enzyme';

it('renders correctly', () => {
  expect(shallow(<BaseFonts />))
    .toMatchSnapshot();
});
