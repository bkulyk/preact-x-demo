import React from 'react';
import GridCell from '@bitchin/grid-cell';
import { shallow } from './enzyme';
import { it, expect } from './jest'

it('should render correctly', () => {
  expect(shallow((
    <GridCell
      span={4}
      className="whatever"
      order={2}
      data-text="test"
    />
  ))).toMatchSnapshot();
});

it('should render with with phone and fixed width', () => {
  expect(shallow((
    <GridCell
      phone={12}
      tablet={4}
      desktop={2}
      align="middle"
      className="custom"
      fixedWidth
    />
  ))).toMatchSnapshot();
});