import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import Home from './Pages/Home';
import Cart from './Pages/Cart';


const AppRouter = (

<Router>
		<Switch>
		<BrowserRouter basename={window.location.pathname || ''}>
			<Route path='/' exact component={Home} />
			<Route path='/cart' component={Cart} />
		</BrowserRouter>
		</Switch>
	</Router>
);

export default AppRouter