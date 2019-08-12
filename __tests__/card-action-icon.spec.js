import React from 'react';
import CardActionIcon from '@bitchin/card-action-icon';
import { shallow } from './enzyme';

it('renders correctly, it is pretty much just a button', () => {
  expect(shallow(<CardActionIcon>View</CardActionIcon>))
    .toMatchSnapshot();
});

it('should send click events to the button', () => {
  expect(shallow(<CardActionIcon onClick={() => {}}>favorite</CardActionIcon>))
    .toMatchSnapshot();
});

it('should pass on any props to the button', () => {
  expect(shallow((
    <CardActionIcon className="something" data-x="x" raised>favorite</CardActionIcon>
  ))).toMatchSnapshot();
});
