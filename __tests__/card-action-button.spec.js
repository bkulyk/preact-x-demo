import React from 'react';
import CardActionButton from '@bitchin/card-action-button';
import { shallow } from './enzyme';

it('renders correctly, it is pretty much just a button', () => {
  expect(shallow(<CardActionButton>View</CardActionButton>))
    .toMatchSnapshot();
});

it('should send click events to the button', () => {
  expect(shallow(<CardActionButton onClick={() => {}}>View</CardActionButton>))
    .toMatchSnapshot();
});

it('should pass on any props to the button', () => {
  expect(shallow((
    <CardActionButton className="something" data-x="x" raised>View</CardActionButton>
  ))).toMatchSnapshot();
});
