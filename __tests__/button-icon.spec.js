import React from 'react';
import { shallow } from './enzyme';
import ButtonIcon from '@bitchin/button-icon';

it('renders correctly', () => {
  expect(shallow(<ButtonIcon>favorite</ButtonIcon>))
    .toMatchSnapshot();
});

