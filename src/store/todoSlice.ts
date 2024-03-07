import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

import { TTodoList, TTodo } from "../types/types";

const initialState: TTodoList = {
  items: [],
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

    toggleCheckTodo: (state, { payload }) => {
      state.items = state.items.map((item) => {
        return item.id === payload ? { ...item, checked: !item.checked } : item;
      });
    },
  },
  selectors: {
    getTodos: (state) => state.items,
    getCounter: createSelector(
      (state) => state.items,
      (items) => {
        const completedTaskCounter = items.filter(
          (item: TTodo) => item.checked === true
        ).length;
        const unCompletedTaskCounter = items.filter(
          (item: TTodo) => item.checked === false
        ).length;

        return { unCompletedTaskCounter, completedTaskCounter };
      }
    ),
  },
});

export const { addTodo, deleteTodo, toggleCheckTodo } = todoSlice.actions;

export const { getTodos, getCounter } = todoSlice.selectors;

export default todoSlice.reducer;
