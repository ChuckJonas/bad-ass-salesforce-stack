import { combineReducers } from 'redux';
import todo, { TodoState } from './todo';

export interface GlobalState {
    todo: TodoState;
}

export default combineReducers<GlobalState>({
    todo,
});
