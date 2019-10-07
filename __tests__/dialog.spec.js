import React from 'react';
import Dialog from '@bitchin/dialog';
import { shallow } from './enzyme';
import { expect } from './jest';

it('renders correctly with defaults', () => {
  const tree = shallow((
    <Dialog
      title="test dialog"
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with component actions', () => {
  const tree = shallow((
    <Dialog
      title="test dialog"
      actions={(
        <div>actions would go here</div>
      )}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with array actions', () => {
  const tree = shallow((
    <Dialog
      title="test dialog"
      actions={['cancel', 'ok']}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with hashmap actions', () => {
  const tree = shallow((
    <Dialog
      title="test dialog"
      actions={{ cancel: 'Cancel', ok: 'OK' }}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with hashmap actions and a default action', () => {
  const tree = shallow((
    <Dialog
      title="test dialog"
      actions={{ cancel: 'Cancel', ok: 'OK' }}
      defaultAction="ok"
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with a simple body', () => {
  const tree = shallow((
    <Dialog
      title="simple body"
      body="lorem ipsum dolor sit"
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with a custom body', () => {
  const tree = shallow((
    <Dialog
      title="simple body"
      body={(<em>lorem ipsum dolor sit</em>)}
    />
  ));

  expect(tree).toMatchSnapshot();
});

it('renders correctly with a custom title', () => {
  const tree = shallow((
    <Dialog
      title={(<strong>strong body</strong>)}
    />
  ));

  expect(tree).toMatchSnapshot();
});
