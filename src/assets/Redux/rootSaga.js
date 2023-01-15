import { all } from 'redux-saga/effects'
import coinsSaga from './coinsStore/coinSaga';

export default function* rootSaga() {
    yield all([
      coinsSaga()
    ])
  }
  
  