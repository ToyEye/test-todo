import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.items = [...state.items, payload];
    },

    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    addCurrentTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },

    updateTodo: (state, { payload }) => {
      state.items = state.items.map((item) => {
        return item.id === state.currentTodo.id
          ? { text: payload, id: state.currentTodo.id }
          : item;
      });
    },
  },
  selectors: {
    getTodos: (state) => state.items,
  },
});

export const { addTodo, deleteTodo, updateTodo, addCurrentTodo } =
  todoSlice.actions;

export const { getTodos } = todoSlice.selectors;

export default todoSlice.reducer;
