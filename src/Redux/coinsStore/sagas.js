import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getCoinsSuccess } from './store';

function* fetchCoins() {
  const state = yield select();
  const { coinsListLimit, currentCurrency } = state.coinsStore;

  try {
    const coins = yield call(() => fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=${coinsListLimit}&tsym=${currentCurrency}`))
    const formattedCoins = yield coins.json();
    yield put(getCoinsSuccess(formattedCoins.Data));
  }
  catch (error) {
    yield put(getCoinsSuccess([]));
    alert("Couldn't get coins");
  }
}


function* coinsSaga() {
  yield takeEvery('coins/getCoinsFetch', fetchCoins)
}

export default coinsSaga