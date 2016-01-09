import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact'

window.React = React;

render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/music" component={Music}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>), document.getElementById('content')
);
