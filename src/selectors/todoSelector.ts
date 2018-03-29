import * as norm from "@src/lib/normalized";
import { GlobalState } from "@src/reducers";
import { createSelector } from "reselect";

export const getTodo = createSelector(
  (state: GlobalState) => state.todo,
  (todos) => {
    return norm.filter(todos, (item) => {
      return !item.done;
    });
  },
);

export const getDone = createSelector(
  (state: GlobalState) => state.todo,
  (todos) => {
    return norm.filter(todos, (item) => {
      return item.done;
    });
  },
);
