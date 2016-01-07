import React from 'react';

export default React.createClass({

  getDefaultProps() {
    return {
      className: 'about'
    }
  },

  render() {
    return (
      <div className='about'>
        <h2>About</h2>
        <p>We are Cubeik, we are a 2 person group that produce EDM, which we post to our soundcloud from time to time.</p>
        <p>If you want to listen, our profile can be found at: </p> <a href='http://soundcloud.com/cubeik' target='_blank'>soundcloud.com/cubeik</a>
      </div>
    );
  }
});
