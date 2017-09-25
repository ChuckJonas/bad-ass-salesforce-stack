import { TASK_DONE_STATUS } from "@src/constants";
import { Task, TaskFields } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { PromiseThunk, TypeKeys } from "./";

export interface AddDoneAction {
  type: TypeKeys.ADD_DONE;
  add: TaskFields;
}
export interface RemoveDoneAction {
  type: TypeKeys.REMOVE_DONE;
  done: TaskFields;
}
export interface LoadDoneAction {
  type: TypeKeys.LOAD_DONE;
  done: TaskFields[];
}

export const addDone = (done: TaskFields): AddDoneAction => {
  return {
    type: TypeKeys.ADD_DONE,
    add: done,
  };
};

// for async calls use thunk.  A thunk is a function that returns a function.
// The inner return type can be promise to help chain actions together
export const removeDone = (done: TaskFields): PromiseThunk<void> =>
  (dispatch) => {
    const newDone = new Task(done);
    return newDone.delete().then(() => {
      const action: RemoveDoneAction = {
        type: TypeKeys.REMOVE_DONE,
        done,
      };
      dispatch(action);
    });
  };

export const loadDone = (): PromiseThunk<void> =>
  (dispatch) => {
    return Task.retrieve(`SELECT Id, Description, Status FROM Task WHERE Status='${TASK_DONE_STATUS}'`)
      .then((tasks) => {
        dispatch({
          type: TypeKeys.LOAD_DONE,
          done: tasks,
        });
      });
  };
