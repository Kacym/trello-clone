import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoReducer = createSlice({
  name: "todo-reducer",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
        state.push(action.payload)
    } 
  },
});

export default todoReducer.reducer
export const { addTodo } = todoReducer.actions
