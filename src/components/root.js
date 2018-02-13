import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';

// v COMPONENTS v
import App from './app.js';
import Test from './test.js';
import ErrorPage from './page-not-found.js';

// ^ COMPONENTS ^


const Root = ({ store }) => (
  <Provider store={store}>
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/test" component={Test} />
			<Route path="*" component={ErrorPage} />
		</Switch>
	</Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root