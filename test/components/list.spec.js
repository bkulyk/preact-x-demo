import React from 'react';
import render from 'preact-render-to-string';
import {
  describe,
  it,
  expect,
} from '../jest';
import List from '../../src/components/list';
import ListItem from '../../src/components/list-item';

jest.mock('../../src/components/list-item');
ListItem.mockImplementation(({ children }) => <span>{children}</span>);

describe('<List />', () => {
  it('should render a list with the items mocked out', async () => {
    const tree = render(<List />);
    expect(tree).toMatchSnapshot();
  });
});
