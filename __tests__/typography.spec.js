import React from 'react';
import Typography from '@bitchin/typography';
import { shallow } from './enzyme';
import { it, expect } from './jest'

it('should render correctly', () => {
  expect(shallow((
    <Typography>
      some text
    </Typography>
  ))).toMatchSnapshot();
});

it('should render correctly', () => {
  expect(shallow((
    <Typography
      use="headline5"
      component="p"
    >
      some text
    </Typography>
  ))).toMatchSnapshot();
});

it('should render correctly', () => {
  expect(shallow((
    <Typography
      use="overline"
      component="div"
      className="custom"
      ellipsis
      data-something="something"
    >
      some text
    </Typography>
  ))).toMatchSnapshot();
});
