import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  logged: false,
  id: null,
  currentUser: null,
  status: null, // {pending, success}
};
const USERS_ULR = "http://localhost:3000/users";

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(USERS_ULR);
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const response = await axios.get(`${USERS_ULR}/${userId}`);
  return response.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (initialUser) => {
    const newUser = { ...initialUser, role: "user" };
    const response = await axios.post(USERS_ULR, newUser);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.id = null;
      state.logged = false;
      state.currentUser = null;
      localStorage.removeItem("id");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const userData = action.payload;
        const { id } = userData;
        state.logged = true;
        state.id = id;
        state.currentUser = userData;
        state.status = "success";
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "pending";
      });
  },
});
export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
