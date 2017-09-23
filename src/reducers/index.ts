import { combineReducers } from "redux";
import done, { DoneState } from "./done";
// Import reducers
import todos, { TodoState } from "./todo";

export interface GlobalState {
    todo: TodoState;
    done: DoneState;
}

export default combineReducers({
    todos,
    done,
});
