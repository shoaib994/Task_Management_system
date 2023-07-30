import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/task";


export const server = "https://task-backent-api.onrender.com/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

export default store;
