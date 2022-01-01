import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'stateCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, { payload }) => {
            state.value += payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer