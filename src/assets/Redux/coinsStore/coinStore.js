import { createSlice } from '@reduxjs/toolkit'


export const coinSlice = createSlice({
    name: 'coins',
    initialState: {
      coins: [],
      coinsListLimit: 10,
      currentCurrency: 'USD',
      isLoading: false  
    },
    reducers:{
     getCoinsFetch: (state) =>{
      state.isLoading = true;
     },
     getCoinsSuccess: (state, action)=>{
      state.coins = action.payload;
     },
     getCoinsFailure: (state)=>{
        state.isLoading = false;
     }
    }
}) 

export const { getCoinsFetch, getCoinsSuccess, getCoinsFailure } = coinSlice.actions;

export default coinSlice.reducer;