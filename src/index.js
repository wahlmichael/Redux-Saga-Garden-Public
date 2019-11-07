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
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...action.payload ]
    default:
      return state;
  }
};

const myPlantId = (state = '', action) => {
  if(action.type === "FIND_PLANT_ID"){
    return {...state, myPlantId: action.payload}
  } else {
    return state;
  }
}

const myPlant = (state = {}, action) => {
  if(action.type === "FIND_PLANT"){
    return action.payload
  } else {
    return state;
  }
}


function* postSaga(action){
  try{
    yield axios.post('/api/plant', action.payload);
    yield put({type: 'GET_PLANT'});
  } catch {
   console.log('Error in postSaga');
  }
}

function* rootSaga() {
  yield takeEvery('SET_PLANT', postSaga);
  yield takeEvery('GET_PLANT', plantSaga);
  yield takeEvery('DELETE_PLANT', deleteSaga);
 }

function* plantSaga() {
  try {
      const plantResponse = yield axios.get('/api/plant');
      yield put ({ type: 'ADD_PLANT', payload: plantResponse.data})
  } catch(error) {
      console.log('error fetching plant', error)
  }
}

function* deleteSaga(action) {
  try {
     yield axios.delete(`/api/plant/${action.payload}`);
     yield put({type: 'GET_PLANT'});
  } catch(error) {
      console.log('error fetching plant', error)
  }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    plantList,
    myPlantId,
    myPlant,
   }),
   applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
