import React from 'react';
import IconButton from '@bitchin/icon-button';
import { render } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(render(<IconButton icon='favorite'>Favorite</IconButton>))
    .toMatchSnapshot();
});