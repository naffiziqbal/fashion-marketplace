import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";
import handleJWT from "../../lib/handleJWT";

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
  try {
    const email = user.email;
    const password = user.password;
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  } catch (err) {
    alert(err.message);
  }
});

export const logIn = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);

      //* Post Jwt Function
      await handleJWT(email, password);
      //
      return data.user.email;
    } catch (err) {
      alert(err.message);
    }
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
