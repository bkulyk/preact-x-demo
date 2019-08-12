import
React from 'react';
import List from '@bitchin/list';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow(<List>some-children</List>)).toMatchSnapshot();
});

it('should be able to render a different component', () => {
  expect(shallow((
    <List
      component="div"
      className="custom"
      data-something="something"
    >
      some-children
    </List>
  ))).toMatchSnapshot();
});
