import React from 'react';
import Icon from '@bitchin/icon';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow(<Icon icon="favorite" />)).toMatchSnapshot();
});

it('should render correctly with children instead of icon prop', () => {
  expect(shallow(<Icon>favorite</Icon>)).toMatchSnapshot();
});

it('should render correctly with extra props', () => {
  expect(shallow((
    <Icon
      className="custom"
      data-something="something"
    >
      favorite
    </Icon>
  ))).toMatchSnapshot();
});
