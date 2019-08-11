import React from 'react';
import componentWithClass from '@bitchin/component-with-class';
import { shallow } from './enzyme';
import { it, expect } from './jest';

it('should be a function', () => {
  expect(typeof componentWithClass).toBe('function');
});

it('should create an element with a class name and a type', () => {
  const Comp = componentWithClass('li', 'my-custom-class');
  expect(shallow(<Comp />)).toMatchSnapshot();
});

it('the component should be able set props', () => {
  const Comp = componentWithClass('div', 'my-custom-class');
  expect(shallow(<Comp data-something="someData" className="additional Class" />)).toMatchSnapshot();
});

it('the component should be able set props', () => {
  const Comp = componentWithClass('span', 'my-custom-span');
  expect(shallow(<Comp>child data</Comp>)).toMatchSnapshot();
});
