import { Task } from "@src/generated/sobs";

// type defnition for what the state should be
export type TodoState = Task[];

// action reducer types

export interface AddTodoAction {
    type: "ADD_TODO";
    add: Task;
}
export interface RemoveTodoAction {
    type: "REMOVE_TODO";
    index: number;
}
export interface ClearTodoAction {
    type: "CLEAR_TODO";
}
export interface GetTodoAction {
    type: "GET_TODO";
    todo: Task[];
}

type Action = AddTodoAction | RemoveTodoAction | ClearTodoAction | GetTodoAction;

const initState: TodoState = [];

const todo = (state: Task[] = initState, action: Action): Task[] => {
    switch (action.type) {
        case "ADD_TODO":
            // why not array push? because each state has to be a completely new object
            // array push modifiys the current object (state) instead of generating a new one
            // this is shorthand for state.concat([action.payload])
            return [...state, action.add];
        case "REMOVE_TODO":
            // Have Reducer remove Task
            state[action.index].status = "closed";
            state[action.index].update();
            // why not some slices here?
            // array slice modifices the current object (state) instead of generating a new one
            // this one takes the sate, splits it into two arrays based on the index given
            // and then concats them, which returns a brand new array object
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case "CLEAR_TODO":
            return [];
        case "GET_TODO":
            return action.todo;
        default:
            return state;
    }
};

export default todo;
