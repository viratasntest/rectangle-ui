import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  projects: [],
  activeProject: {},
};

const authSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

export const { setProjects, setActiveProject } = authSlice.actions;

export default authSlice.reducer;
