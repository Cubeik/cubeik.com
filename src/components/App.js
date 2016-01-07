import React from 'react';
import { Link }  from 'react-router';
import packageJSON from '../../package.json';
import Navbar from './Navbar';
import Homepage from './Homepage';

export default React.createClass({
  returnSomething(something) {
    //this is only for testing purposes. Check /test/components/App-test.js
    return something;
  },
  render() {
    const version = packageJSON.version;

    return (
      <div>
        <header>
          <h1>Cubeik Studios</h1>
          <Navbar />
        </header>
        <section className={this.props.children ? this.props.children.props.className : 'home' + ' content'}>
          {this.props.children || <Homepage />}
        </section>
        <footer>
          <em>©</em> 2015 Tom Merchant
        </footer>
      </div>
    )
  }
});
