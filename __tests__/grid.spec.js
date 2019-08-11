import React from 'react';
import Grid from '@bitchin/grid';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow(<Grid>Something</Grid>)).toMatchSnapshot();
});

it('should render correctly with props', () => {
  expect(shallow((
    <Grid
      data-something="test"
      className="custom"
      align="right"
      fixedColumnWidth
    >
      Something
    </Grid>
  ))).toMatchSnapshot();
});
