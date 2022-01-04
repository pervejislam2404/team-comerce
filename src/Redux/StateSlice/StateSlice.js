import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'stateCounter',
    initialState: {
        user: {},
        errorMsg: '',
        googleSignErrorMsg: '',
        isLoading: true,
        idToken: '',
        admin: false,

    },
    reducers: {
        setErrorMsg: (state, { payload }) => {
            state.errorMsg = payload;
        },
        setGoogleSignErrorMsg: (state, { payload }) => {
            state.googleSignErrorMsg = payload;
        },
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setIdToken: (state, { payload }) => {
            state.idToken = payload;
        },
        setAdmin: (state, { payload }) => {
            state.admin = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setErrorMsg, setUser, setIsLoading, setGoogleSignErrorMsg, setIdToken, setAdmin } = counterSlice.actions

export default counterSlice.reducer