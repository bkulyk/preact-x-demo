import React from 'react';
import Tab from '@bitchin/tab';
import { shallow } from './enzyme';
import { it, expect } from './jest'

it('should render correctly', () => {
  expect(shallow((
    <Tab
      label="Nearby"
    />
  ))).toMatchSnapshot();
});

it('should render correctly when active', () => {
  expect(shallow((
    <Tab
      label="Favorite"
      active
      icon="favorite"
    />
  ))).toMatchSnapshot();
});

it('should render correctly when icon and label are stacked', () => {
  expect(shallow((
    <Tab
      label="Favorite"
      active
      icon="favorite"
      stacked
    />
  ))).toMatchSnapshot();
});
