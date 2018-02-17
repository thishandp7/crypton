import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import {getStore} from './store/configureStore';

ReactDOM.render(
  <Provider store={getStore()}><App /></Provider>,
  document.getElementById('root')
);
