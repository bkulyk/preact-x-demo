import React from 'react';
import CardActionIcons from '@bitchin/card-action-icons';
import { shallow } from './enzyme';

it('renders correctly, it is pretty much just a div', () => {
  expect(shallow(<CardActionIcons>-- some children go here --</CardActionIcons>))
    .toMatchSnapshot();
});