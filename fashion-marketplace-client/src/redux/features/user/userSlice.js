import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";

const initialState = {
  isLoading: false,
  userInfo: {
    email: {},
    name: {},
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
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (user) => {
    const udisplayName = user.displayName;
    const udata = await updateProfile(auth.currentUser, {
      displayName: udisplayName,
    });
    return udata;
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
      })
      //update User
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = true;
        state.userInfo.name = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.stack;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
