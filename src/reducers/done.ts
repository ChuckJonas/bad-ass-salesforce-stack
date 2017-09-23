import { Task } from "@src/generated/sobs";
// done state for global state
export type DoneState = Task[];

// action reducer types

export interface AddDoneAction {
    type: "ADD_DONE";
    add: Task;
}
export interface RemoveDoneAction {
    type: "REMOVE_DONE";
    index: number;
}
export interface GetDoneAction {
    type: "GET_DONE";
    done: Task[];
}

type Action = AddDoneAction | RemoveDoneAction | GetDoneAction;

const initState: DoneState = [];

const done = (state: Task[] = initState, action: Action): Task[] => {
    switch (action.type){
        case "ADD_DONE":
            // why not array push? because each state has to be a completely new object
            // array push modifiys the current object (state) instead of generating a new one
            // this is shorthand for state.concat([action.add])
            return [...state, action.add];
        case "REMOVE_DONE":
            state[action.index].delete();
            // why not some slices here?
            // array slice modifices the current object (state) instead of generating a new one
            // this one takes the sate, splits it into two arrays based on the index given
            // and then concats them, which returns a brand new array object
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case "GET_DONE":
            return action.done;
        default:
            return state;
    }
};

export default done;
