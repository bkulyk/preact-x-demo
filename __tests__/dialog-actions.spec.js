import React from 'react';
import DialogActions from '@bitchin/dialog-actions';
import { shallow } from './enzyme';
import { expect } from './jest';

it('renders correctly with array actions', () => {
  const tree = shallow((
    <DialogActions
      actions={['cancel', 'ok']}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with hashmap actions', () => {
  const tree = shallow((
    <DialogActions
      actions={{ cancel: 'Cancel', ok: 'OK' }}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with hashmap actions and a default action', () => {
  const tree = shallow((
    <DialogActions
      title="test dialog"
      actions={{ cancel: 'Cancel', ok: 'OK' }}
      defaultAction="ok"
    />
  ));

  expect(tree).toMatchSnapshot();
});
