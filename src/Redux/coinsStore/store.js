import { createSlice } from '@reduxjs/toolkit'


export const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    coinsListLimit: 10,
    currentCurrency: 'USD',
    currenciesAvaiable: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'ILS'],
    isLoading: false
  },
  reducers: {
    getCoinsFetch: (state) => {
      state.isLoading = true;
    },
    getCoinsSuccess: (state, action) => {
      state.coins = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    showMoreCoins: (state) => {
      state.coinsListLimit = state.coinsListLimit + 5;
    }
  }
})

export const { getCoinsFetch, getCoinsSuccess, setLoader, showMoreCoins } = coinSlice.actions;

export default coinSlice.reducer;