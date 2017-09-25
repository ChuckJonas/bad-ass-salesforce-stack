import { combineReducers } from "redux";
import done, { DoneState } from "./done";
// Import reducers
import todo, { TodoState } from "./todo";

export interface GlobalState {
    todo: TodoState;
    done: DoneState;
}

export default combineReducers<GlobalState>({
    todo,
    done,
});
