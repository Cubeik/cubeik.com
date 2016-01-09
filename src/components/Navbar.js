import { Link }  from 'react-router';
import Symbol from './Symbol';
import React from 'react';

export default React.createClass({

  getDefaultProps() {
    return {
      handleClick: React.PropTypes.func
    }
  },

  handleClick(e) {
    var target = e.target.parentNode;

    if (target.tagName.toLowerCase() === 'a') {
      target = target.parentNode;
    }

    if (!target.classList.contains('active')) {
      var oldTarget = document.querySelector('.active');

      if (oldTarget !== null) {
        oldTarget.classList.remove('active');
      }

      target.classList.add('active');
    }
  },

  render() {
    return (
      <ul id="navlist">
        <li id='home' className="navnode" onClick={this.handleClick}>
          <Link to="/"><Symbol sid="home" />Home</Link>
        </li>

        <li id='about' className="navnode" onClick={this.handleClick}>
          <Link to="/about" onclick={this.handleClick}><Symbol sid="about" />About</Link>
        </li>

        <li id='music' className="navnode" onClick={this.handleClick}>
          <Link to="/music" onclick={this.handleClick}><Symbol sid="music" />Music</Link>
        </li>

        <li id='contact' className="navnode" onClick={this.handleClick}>
          <Link to="/contact" onclick={this.handleClick}><Symbol sid="contact" />Contact</Link>
        </li>
      </ul>
    )
  }
});
