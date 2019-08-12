import React from 'react';
import ButtonIcon from '@bitchin/button-icon';
import { shallow } from './enzyme';

it('renders correctly', () => {
  expect(shallow(<ButtonIcon>favorite</ButtonIcon>))
    .toMatchSnapshot();
});
