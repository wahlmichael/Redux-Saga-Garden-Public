import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; 
import axios from 'axios';

import App from './App';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};


function* postSaga(action){
  try{
    yield axios.post('/api/plant', action.payload);
    yield put({type: 'ADD_PLANT', payload: action.payload});
  } catch {
   console.log('Error in postSaga');
  }

}

function* rootSaga() {
  yield takeEvery('SET_PLANT', postSaga)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList,
   }),
   applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
