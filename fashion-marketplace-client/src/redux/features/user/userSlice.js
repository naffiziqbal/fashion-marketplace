import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userInfo: {},
  isError: false,
  success: false,
  isSignedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = true;
      state.isSignedIn = true;
      state.userInfo = action.payload;
      state, action;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
