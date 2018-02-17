import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import { initSagas } from '../initSagas';

const sagaMiddleware = createSagaMiddleware();


export const getStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  initSagas(sagaMiddleware);
  return store;
};
