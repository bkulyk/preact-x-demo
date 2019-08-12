import React from 'react';
import Transition from '@bitchin/transition';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should render correctly', () => {
  const wrapper = shallow((
    <Transition>
      {state => (
        <div>{state}</div>
      )}
    </Transition>
  ));
  expect(wrapper.text()).toEqual('exited');

  wrapper.setProps({ on: true });
  expect(wrapper.text()).toEqual('entered');
});
