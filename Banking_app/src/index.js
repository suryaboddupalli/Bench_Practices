import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Store } from './Redux/Store'
import { BrowserRouter } from 'react-router-dom'
import Trail from './Components/Trail';

ReactDOM.render(
  <BrowserRouter >
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
