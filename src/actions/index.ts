import { GlobalState } from "@src/reducers";
import { ThunkAction } from "redux-thunk";

export * from "./todo";
export * from "./done";

export enum TypeKeys {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  LOAD_TODO = "LOAD_TODO",
  ADD_DONE = "ADD_DONE",
  REMOVE_DONE = "REMOVE_DONE",
  LOAD_DONE = "LOAD_DONE",
  OTHER_ACTION = "__any_other_action_type__",
}

// used to enforce all reducer switch statements have default action
//   see: https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}

// Shorthand thunk to return a promise.
// adding this type here will help simplify imports and code
export type PromiseThunk<T> = ThunkAction<Promise<T>, GlobalState, void>;
