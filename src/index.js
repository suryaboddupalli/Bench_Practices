import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
	<div>
		<BrowserRouter >
		<Provider store={store}>
			<App />
		</Provider>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);

