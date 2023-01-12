import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducer: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    }
})

//Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;




// STORE -> GLOBALIZED STATE
// export default configureStore({
//     reducer: {}
// })










// // ACTION -> Describes what you want to do (e.g. increment , remove...)
// const increment = () => {
//     return {
//         name: 'INCREMENT' //action name, also can be called type
//     }
// }
// const decrement = () => {
//     return {
//         name: 'DECREMENT'
//     }
// }
// const counterState = 0;

// // Reducer -> Describes how you actions transform the state to the NEXT state
// const counter = (state = counterState, action) => { //reducer contain 2 parameters retduer(intial state, action)
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//     }
// }

// let store = createStore(counter)

// // Dispatch -> Executes our action to the reducer