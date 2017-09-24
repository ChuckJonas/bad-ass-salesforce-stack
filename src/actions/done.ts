import { TASK_DONE_STATUS } from "@src/constants";
import { Task } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { TypeKeys } from "./";

export interface AddDoneAction {
    type: TypeKeys.ADD_DONE;
    add: Task;
}
export interface RemoveDoneAction {
    type: TypeKeys.REMOVE_DONE;
    done: Task;
}
export interface LoadDoneAction {
    type: TypeKeys.LOAD_DONE;
    done: Task[];
}

export const addDone = (done: Task): AddDoneAction => {
    return {
        type: TypeKeys.ADD_DONE,
        add: done,
    };
};

// takes the index and removes it
export const removeDone = (done: Task): Dispatch<RemoveDoneAction> => {
    return (dispatch: Dispatch<RemoveDoneAction>) => {
      return done.delete().then(() => {
        const action: RemoveDoneAction = {
          type: TypeKeys.REMOVE_DONE,
          done,
        };
        dispatch(action);
      });
    };
};

export const loadDone = (): Dispatch<LoadDoneAction> => {
    return (dispatch: Dispatch<LoadDoneAction>) => {
      return Task.retrieve(`SELECT Id, Description, Status FROM Task WHERE Status='${TASK_DONE_STATUS}'`)
      .then((tasks) => {
        dispatch({
                type: TypeKeys.LOAD_DONE,
                done: tasks,
            });
        });
    };
};
