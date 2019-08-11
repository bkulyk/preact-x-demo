import React from 'react';
import HelperLine from '@bitchin/helper-line';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  expect(shallow((<HelperLine className="custom">children</HelperLine>)))
    .toMatchSnapshot();
});
