import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

const store = createStore(
  (state = {}, action) => {
    console.log({ state, action });
    return action;
  },
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
