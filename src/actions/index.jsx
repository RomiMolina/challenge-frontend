
export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT= 'DELETE_PROJECT';
export const EDIT_PROJECT ='EDIT_PROJECT';

export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project,
});

export const deleteProject = (id) => ({
    type: DELETE_PROJECT,
    payload: id,
});

export const editProject = (updatedProject) => ({
    type: EDIT_PROJECT,
    payload: updatedProject,
  });