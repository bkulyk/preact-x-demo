import React from 'react';
import Elevation from '@bitchin/elevation';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('renders correctly, with default z prop', () => {
  expect(shallow((
    <Elevation
      title="some-title"
      url="http://example.com/awesome-pic.png"
      className="mine"
    >
      content
    </Elevation>
  ))).toMatchSnapshot();
});

it('renders correctly, with z prop', () => {
  expect(shallow((
    <Elevation
      title="some-title"
      url="http://example.com/awesome-pic.png"
      className="mine"
      children="content"
      z="12"
    />
  ))).toMatchSnapshot();
});
