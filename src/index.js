import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Emphasize extends Component {

  static propTypes = {
    className: PropTypes.string,
    tagClassName: PropTypes,
    keywords: PropTypes.array,
    tag: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    tagClassName: 'mark-highlight',
    tag: 'mark',
  }

  constructor(props) {
    super(props);
  }

  renderTag() {
    const { tag, tagClassName, keywords, text } = this.props;
    let parts = text;
    keywords.forEach((word, index) =>
      parts = parts.split(new RegExp(`\\b${word}\\b`)).join(`<${tag} class="${tagClassName}" name="${index}" data-id="${index}">${word}</${tag}>`)
    );
    return { __html: parts };
  }

  render() {
    const { className } = this.props;
    return (
      <span
        className={className}
        dangerouslySetInnerHTML={this.renderTag()}
      />
    );
  }

}

export default Emphasize;
