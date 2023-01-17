import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import reducersIndex from './reducersIndex';

const sagaMiddleware = createSagaMiddleware();

export const mainStore = configureStore({
  reducer: {
    coinsStore: reducersIndex.coinReducer,
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);