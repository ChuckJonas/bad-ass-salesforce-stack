import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

configure({ adapter: new Adapter() });

it('blank', () => {
  expect(true).toBe(true);
});
