import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    	<div>
	      <div>React simple starter</div>
	      <Link to="/test">Test</Link>
      </div>
    );
  }
}
