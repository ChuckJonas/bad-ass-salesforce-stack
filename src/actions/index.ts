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

// use to prevent fallthrough on reducer?
export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
