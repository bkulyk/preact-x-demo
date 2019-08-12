import React from 'react';
import CardActionButtons from '@bitchin/card-action-buttons';
import { shallow } from './enzyme';

it('renders correctly, it is pretty much just a div', () => {
  expect(shallow(<CardActionButtons className="custom" x-data="my-data">...</CardActionButtons>))
    .toMatchSnapshot();
});
