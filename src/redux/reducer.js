import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //here we will write our reducers
    //Adding tasks
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove tasks
    removeTasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update tasks
    updateTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.description,
          };
        }
        return task;
      });
    },
    //completed
    completeTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isDone: true,
          };
        }
        return task;
      });
    },
  },
});

export const {
  addTasks,
  removeTasks,
  updateTasks,
  completeTasks,
} = taskReducer.actions;
export const reducer = taskReducer.reducer;
