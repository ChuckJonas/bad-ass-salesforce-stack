import {ActionKeys, AddTodoAction, DeleteTodoAction, LoadTodoAction, MarkDoneAction} from "@src/actions";
import { TodoFields } from "@src/generated/sobs";
import * as norm from "@src/lib/normalized";

// interface to make it easier to work with a normalized state

export type TodoState = Normalized<TodoFields>;

type Action = AddTodoAction
              | MarkDoneAction
              | LoadTodoAction
              | DeleteTodoAction;

const initState = norm.empty<TodoFields>();

const todoReducer = (state = initState, action: Action): TodoState => {
    switch (action.type) {
        case ActionKeys.ADD_TODO:
            return norm.addItem(state, "id", action.todo);
        case ActionKeys.MARK_DONE:
            // we could have passed the todo from the action, but this is meant to show an example of immutatability
            const newTodo: TodoFields = {...state.byId[action.todoId], ...{done: true}};
            return norm.addItem(state, "id", newTodo);
        case ActionKeys.LOAD_TODOS:
            return norm.fromArray(action.todos, ((item) => item.id));
        case ActionKeys.DELETE_TODO:
          return norm.removeItem(state, action.id);
        default:
            return state;
    }
};

export default todoReducer;
