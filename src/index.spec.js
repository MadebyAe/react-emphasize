import React from 'react';
import test from 'tape';
import deepFreeze from 'deep-freeze';
import { shallow } from 'enzyme';
import Component from './';

test('Spec loop', (t) => {
  const props = {
    text: 'Hello World',
    keywords: ['World'],
  };
  deepFreeze(props);
  const component = shallow(<Component {...props} />);
  t.equal(component.nodes.length, 1, 'Should return true');
  t.deepEqual(component.html(), {}, 'Should return true');
  t.end();
});

test('Spec loop', (t) => {
  const props = {
    text: 'Netflix help center',
    keywords: ['Netflix help', 'netflix'],
  };
  deepFreeze(props);
  const component = shallow(<Component {...props} />);
  t.equal(component.nodes.length, 1, 'Should return true');
  t.equal(component.find('mark').length, 1, 'Should return true');
  t.deepEqual(component.html(), {}, 'Should return true');
  t.end();
});
