import React from 'react';

export default React.createClass({

  getDefaultProps() {
    return {
      className: 'contact'
    }
  },

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>Email: </p> <a href="mailto:cubeik@mail.com"> cubeik@mail.com </a>
      </div>
    );
  }
});
