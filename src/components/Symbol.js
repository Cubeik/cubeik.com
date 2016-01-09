import React from 'react';


export default React.createClass({

  PropTypes: {
    sid: React.PropTypes.string.isRequired,
    symbols: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      sid: 'home',
      symbols: {
        'home': './dist/images/home.svg',
        'about': './dist/images/about.svg',
        'music': './dist/images/music.svg',
        'contact': './dist/images/contact.svg'
      },
    }
  },

  render() {
    return (
      <image className="symbol" src={this.props.symbols[this.props.sid]} />
    )
  }
});
