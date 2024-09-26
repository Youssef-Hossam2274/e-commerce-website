import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersSlice";

const initialState = {};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const {} = cartSlice.actions;
export default cartSlice.reducer;
