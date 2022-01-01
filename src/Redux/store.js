import { configureStore } from '@reduxjs/toolkit'
import states from './StateSlice/StateSlice'

export const store = configureStore({
    reducer: {
        statesCounter: states
    },
})