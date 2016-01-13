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
        'home': './images/home.svg',
        'about': './images/about.svg',
        'music': './images/music.svg',
        'contact': './images/contact.svg'
      },
    }
  },

  render() {
    return (
      <image className="symbol" src={this.props.symbols[this.props.sid]} />
    )
  }
});
