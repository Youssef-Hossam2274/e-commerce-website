import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});
