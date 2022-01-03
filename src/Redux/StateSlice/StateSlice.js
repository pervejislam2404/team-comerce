import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
  name: "stateCounter",
  initialState: {
    user: {},
    errorMsg: "",
    isLoading: true,
    modalShow: false,
  },
  reducers: {
    setErrorMsg: (state, { payload }) => {
      state.errorMsg = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setErrorMsg, setUser, setIsLoading, setModalShow } =
  counterSlice.actions;

export default counterSlice.reducer;
