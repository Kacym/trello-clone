import { createSlice } from "@reduxjs/toolkit";
import { CARD_KEY } from "../utils/constants/keys";

const initialState = { todos: [] };

export const todoReducer = createSlice({
  name: "todoReducer",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem(CARD_KEY, JSON.stringify(state.todos));
    },
    getTodos: (state) => {
      const todos = JSON.parse(localStorage.getItem(CARD_KEY)) || [];
      state.todos = todos;
    },
  },
});

export default todoReducer.reducer;
export const { getTodos, addTodo } = todoReducer.actions;
