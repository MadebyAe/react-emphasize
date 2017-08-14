'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emphasize = function (_Component) {
		_inherits(Emphasize, _Component);

		function Emphasize() {
				_classCallCheck(this, Emphasize);

				return _possibleConstructorReturn(this, (Emphasize.__proto__ || Object.getPrototypeOf(Emphasize)).apply(this, arguments));
		}

		_createClass(Emphasize, [{
				key: 'render',
				value: function render() {
						var _props = this.props,
						    className = _props.className,
						    highlightTag = _props.highlightTag,
						    highlightClassName = _props.highlightClassName,
						    keywords = _props.keywords,
						    text = _props.text;

						var Tag = highlightTag;
						var parts = text;
						keywords.forEach(function (word) {
								return parts = parts.split(RegExp('\\b' + word + '\\b', 'i')).join('\n\t    <' + Tag + ' className={' + highlightClassName + '}>' + word + '</' + Tag + '>,\n\t  ');
						});
						return _react2.default.createElement(
								'span',
								{ className: className },
								parts
						);
				}
		}]);

		return Emphasize;
}(_react.Component);

Emphasize.propTypes = {
		className: _react.PropTypes.string,
		highlightClassName: _react.PropTypes,
		keywords: _react.PropTypes.array,
		highlightTag: _react.PropTypes.string,
		text: _react.PropTypes.string,
		highlightStyle: _react.PropTypes.object
};
Emphasize.defaultProps = {
		highlightClassName: '',
		highlightTag: 'mark',
		highlightStyle: {}
};
exports.default = Emphasize;