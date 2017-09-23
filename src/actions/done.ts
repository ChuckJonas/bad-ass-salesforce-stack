import { Task } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { AddDoneAction, GetDoneAction, RemoveDoneAction } from "../reducers/done";

export const addDone = (done: Task): AddDoneAction => {
    return {
        type: "ADD_DONE",
        add: done,
    };
};
// takes the index and removes it
export const removeDone = (index: number): RemoveDoneAction => {
    return {
        type: "REMOVE_DONE",
        index,
    };
};
export const getDone = (): Dispatch<GetDoneAction> => {
    return function(dispatch: Dispatch<GetDoneAction>){
      const doneStatus = "done";
      Task.retrieve(`SELECT Id, Description, Status FROM Task WHERE Status='${doneStatus}'`).then((tasks) => {
            dispatch({
                type: "GET_DONE",
                done: tasks,
            });
        });
    };
};
