import { configureStore } from '@reduxjs/toolkit';

// Import your reducers (for example, authReducer, projectReducer)
import authReducer from './slices/authSlice';
import projectsReducer from './slices/projectSlice'

const store = configureStore({
  reducer: {
    auth: authReducer, // Example slice for authentication
    projects: projectsReducer
  },
});

export default store;