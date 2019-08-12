import React from 'react';
import GridInner from '@bitchin/grid-inner';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow(<GridInner>Something</GridInner>)).toMatchSnapshot();
});

it('should render correctly with props', () => {
  expect(shallow((
    <GridInner data-something="test" className="something">
      Something
    </GridInner>
  ))).toMatchSnapshot();
});
