import React from 'react';
import CardMedia from '@bitchin/card-media';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('renders correctly, with properties', () => {
  expect(shallow((
    <CardMedia
      title="some-title"
      url="http://example.com/awesome-pic.png"
    />
  ))).toMatchSnapshot();
});

it('renders correctly, with different props', () => {
  expect(shallow((
    <CardMedia
      url="http://example.com/awesome-pic.png"
      ratio="square"
    />
  ))).toMatchSnapshot();
});
