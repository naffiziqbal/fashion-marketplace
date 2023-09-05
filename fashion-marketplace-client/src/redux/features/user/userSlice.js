import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";

const initialState = {
  isLoading: false,
  userInfo: {
    email: {},
  },
  isError: false,
  success: false,
  error: null,
};
export const createUser = createAsyncThunk("user/createuser", async (user) => {
  const email = user.email;
  const password = user.password;
  const data = await createUserWithEmailAndPassword(auth, email, password);
  console.log(data.user);
  return data.user.email;
});

export const logIn = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userInfo.email = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.error = action.error.stack;
      })
      // Login User
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userInfo.email = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.error = action.error.stack;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
