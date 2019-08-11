import React from 'react';
import { shallow } from './enzyme';
import BaseFonts from '@bitchin/base-fonts';

it('renders correctly', () => {
  expect(shallow(<BaseFonts />))
    .toMatchSnapshot();
});
