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
    getCoinsFailure: (state) => {
      state.isLoading = false;
    },
    showMoreCoins: (state) => {
      state.coinsListLimit = state.coinsListLimit + 5;
    }
  }
})

export const { getCoinsFetch, getCoinsSuccess, getCoinsFailure, showMoreCoins } = coinSlice.actions;

export default coinSlice.reducer;