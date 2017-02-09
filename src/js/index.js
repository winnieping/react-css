import React from 'react';
import { render } from 'react-dom';
import {Router,browserHistory} from 'react-router';
import rootRoute from './routers';

render(
	<Router history={browserHistory} routes={rootRoute}></Router>,
	document.getElementById('reactapp')
);