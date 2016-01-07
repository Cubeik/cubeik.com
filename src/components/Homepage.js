import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      className: 'home'
    }
  },

  render() {
    return (
      <div className='home'>
        <h1>Home</h1>
        <p>
          Welcome to our website, we are Cubeik. For more information look at our about page.
        </p>
        <em><h5>Please note, this website is currently under construction.</h5></em>
      </div>
    )
  }
});
