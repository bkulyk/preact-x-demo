import {
  configure,
  mount,
  render,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

const adapter = new Adapter();

configure({ adapter });

export {
  mount, render, shallow,
};
