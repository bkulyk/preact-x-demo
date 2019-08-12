import React from 'react';
import ListItem from '@bitchin/list-item';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow(<ListItem />)).toMatchSnapshot();
});

it('should render be able to render a different component', () => {
  expect(shallow(<ListItem component="dd" />)).toMatchSnapshot();
});

it('should render be able to render with props', () => {
  expect(shallow((
    <ListItem data-alliance="Rebel" className="pilot">Han Solo</ListItem>
  ))).toMatchSnapshot();
});
