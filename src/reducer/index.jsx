import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject:(state, action) =>{
      const projectId = action.payload;
      state.projects = state.projects.filter((project) => project.id !== projectId);
    },
    editProject: (state, action) => {
      const updatedProject = action.payload;
      const index = state.projects.findIndex((project) => project.id === updatedProject.id);

      if (index !== -1) {
        state.projects[index] = updatedProject;
      }
    }
  },
});

export const { addProject , deleteProject, editProject} = projectSlice.actions;
export default projectSlice.reducer;
