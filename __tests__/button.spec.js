import React from 'react';
import { shallow } from './enzyme';
import Button from '@bitchin/button';
import sinon from 'sinon';

it('renders correctly', () => {
  expect(shallow(<Button>Facebook</Button>))
    .toMatchSnapshot();
});

it('renders a secondary button', () => {
  expect(shallow(<Button secondary>Facebook</Button>))
    .toMatchSnapshot();
});

it('disabled button should render correctly', () => {
  const handleClick = sinon.spy();
  const rendered = shallow((
    <Button disabled onClick={handleClick}>Facebook</Button>
  ));

  expect(rendered).toMatchSnapshot();
});

it('outlined button should render correctly', () => {
  const rendered = shallow((
    <Button outlined>Facebook</Button>
  ));
  expect(rendered).toMatchSnapshot();
});

it('link button should render correctly', () => {
  const rendered = shallow((
    <Button href="#facebook">Facebook</Button>
  ));
  expect(rendered).toMatchSnapshot();
});

it('should allow click events', () => {
  const handleClick = sinon.spy();
  const rendered = shallow(<Button onClick={handleClick}>Facebook</Button>);

  expect(rendered).toMatchSnapshot();

  rendered.find('button').simulate('click');

  expect(handleClick.called).toEqual(true);
});