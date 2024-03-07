import { createSelector } from "@reduxjs/toolkit";
import { TTodoList } from "../types/types";

type TState = {
  todos: TTodoList;
};

export const selectTodos = (state: TState) => state.todos.items;

export const selectFilter = (state: { filter: string }) => state.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter((item) => {
      if (filter === "showUnChecked") {
        return item.checked === false;
      } else if (filter === "showChecked") {
        return item.checked === true;
      } else {
        return item;
      }
    });
  }
);
