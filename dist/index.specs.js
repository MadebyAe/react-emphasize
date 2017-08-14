'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _enzyme = require('enzyme');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Spec loop', function (t) {
  var props = {
    text: 'Hello World',
    keywords: ['World']
  };
  (0, _deepFreeze2.default)(props);
  var component = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
  console.warn(component.html());
  t.equal(component.nodes.length, 1, 'Should return true');
  t.end();
});