// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/reducer/task';

export default configureStore({
  reducer: {
    user:userReducer
  },
});
