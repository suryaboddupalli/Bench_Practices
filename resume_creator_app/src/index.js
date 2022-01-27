import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'

ReactDOM.render(
  <div>
    <Provider store={Store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);