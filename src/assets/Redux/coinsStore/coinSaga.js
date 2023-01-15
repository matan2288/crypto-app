import { call, put, takeEvery, select} from 'redux-saga/effects'
import { getCoinsSuccess } from './coinStore';

function* fetchCoins(){
    const state = yield select();
    const { coinsListLimit, currentCurrency } = state.coinsStore;
    const coins = yield call(()=> fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=${coinsListLimit}&tsym=${currentCurrency}`))
    const formattedCoins = yield coins.json();
    yield put(getCoinsSuccess(formattedCoins.Data));
}
 

function * coinsSaga() {
yield takeEvery('coins/getCoinsFetch', fetchCoins)
}

export default coinsSaga