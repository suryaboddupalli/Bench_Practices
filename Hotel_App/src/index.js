import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <div>
    <BrowserRouter >
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);