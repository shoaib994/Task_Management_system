import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/task";


export const server = "https://task-backend-pi.vercel.app/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

export default store;
