import { all } from 'redux-saga/effects'
import coinsSaga from './coinsStore/coinsSaga';

export default function* rootSaga() {
  yield all([
    coinsSaga()
  ])
}

