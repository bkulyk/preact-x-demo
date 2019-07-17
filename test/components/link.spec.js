import React from 'react';
import {
  describe,
  it,
  expect,
} from '../jest';
import { shallow } from '../enzyme';
import Link from '../../src/components/link';

describe('<Link />', () => {
  it('should render a button that is clickable', async () => {
    const p = new Promise((resolve) => {
      const link = shallow(<Link onClick={() => resolve('clicked')}>something</Link>);
      link.find('a').simulate('click');
    });

    const result = await p;
    expect(result).toEqual('clicked');
  });
});
