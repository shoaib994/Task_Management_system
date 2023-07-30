import { createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer(
  {},
  {
    logingRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.message = action.message;
      state.isAuthenticated = true;
      state.user = action.payload;
  
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    signupRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.message;
  
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    // get user profile

    getAllTaskRequest: (state) => {
      state.loading = true;
    },
    getAllTaskSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.tasks = action.payload;
    
    },
    getAllTaskFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    updateTaskStatusRequest: (state) => {
      state.loading = true;
    },
    updateTaskStatusSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.tasks = action.payload;
      state.message = action.message;
    
    },
    updateTaskStatusFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    deleteTaskRequest: (state) => {
      state.loading = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.tasks = action.payload;
      state.message = action.message;
    
    },
    deleteTaskFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    addTaskRequest: (state) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.tasks = action.payload;
      state.message = action.message;
    
    },
    addTaskFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    clearError: (state, action) => {
        state.error = null;
      },
      clearMessage: (state, action) => {
        state.message = null;
      },
    }
  );
  
  export default userReducer;