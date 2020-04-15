import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

const AppRouter = (
	<Router>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/cart' component={Cart} />
		</Switch>
	</Router>
);

export default AppRouter