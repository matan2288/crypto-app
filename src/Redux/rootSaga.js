import { all } from 'redux-saga/effects'
import coinsSaga from './coinsStore/sagas';

export default function* rootSaga() {
  yield all([
    coinsSaga()
  ])
}

