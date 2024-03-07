import { createSlice } from "@reduxjs/toolkit";

type TTodo = {
  text: string;
  id: string;
  checked: boolean;
};

type TTodoList = {
  items: TTodo[];
};

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
        return item.id === payload.id
          ? { ...item, checked: payload.checked }
          : item;
      });
    },
  },
  selectors: {
    getTodos: (state) => state.items,
  },
});

export const { addTodo, deleteTodo, toggleCheckTodo } = todoSlice.actions;

export const { getTodos } = todoSlice.selectors;

export default todoSlice.reducer;
