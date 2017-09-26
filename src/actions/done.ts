import { Todo, TodoFields } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { PromiseThunk, TypeKeys } from "./";

export interface AddDoneAction {
  type: TypeKeys.ADD_DONE;
  add: TodoFields;
}
export interface RemoveDoneAction {
  type: TypeKeys.REMOVE_DONE;
  done: TodoFields;
}
export interface LoadDoneAction {
  type: TypeKeys.LOAD_DONE;
  done: TodoFields[];
}

export const addDone = (done: TodoFields): AddDoneAction => {
  return {
    type: TypeKeys.ADD_DONE,
    add: done,
  };
};

// for async calls use thunk.  A thunk is a function that returns a function.
// The inner return type can be promise to help chain actions together
export const removeDone = (done: TodoFields): PromiseThunk<void> =>
  (dispatch) => {
    const newDone = new Todo(done);
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
    return Todo.retrieve(`SELECT Id, Task__c FROM Todo__c WHERE Done__c = true`)
      .then((tasks) => {
        dispatch({
          type: TypeKeys.LOAD_DONE,
          done: tasks,
        });
      });
  };
