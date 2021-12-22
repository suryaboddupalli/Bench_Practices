import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import Navbar from './Components/Navbar';


ReactDOM.render(
	<div>
		<Provider store={Store}>
			<App />
			<Navbar />
		</Provider>
	</div>,
	document.getElementById('root')
);

