import React from 'react';
import { default as Card } from '@bitchin/card';
import { shallow } from './enzyme';

it('render with some defaults', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});

it('should accept a bunch of props', () => {
  expect(shallow((
    <Card
      title="Star Wars IV"
      subtitle="A New Hope"
      media="-media-placeholder-"
      content="-content-placeholder-"
      children="-children-placeholder-"
    />
  ))).toMatchSnapshot();
});