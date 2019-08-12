import React from 'react';
import Outline from '@bitchin/outline';
import { shallow } from './enzyme';
import { it, expect } from './jest'

it('should render correctly', () => {
  expect(shallow((
    <Outline
      children="children"
    />
  ))).toMatchSnapshot();
});
