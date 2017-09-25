import {AddTodoAction, LoadTodoAction, RemoveTodoAction, TypeKeys} from "@src/actions";
import { Task } from "@src/generated/sobs";
// type defnition for what the state should be
export type TodoState = Task[];

type Action = AddTodoAction | RemoveTodoAction | LoadTodoAction;

const initState: TodoState = [];

const todoReducer = (state: Task[] = initState, action: Action): Task[] => {
    switch (action.type) {
        case TypeKeys.ADD_TODO:
            // why not array push? because each state has to be a completely new object
            // array push modifiys the current object (state) instead of generating a new one
            // this is shorthand for state.concat([action.payload])2
            return [...state, action.todo];
        case TypeKeys.REMOVE_TODO:
            let newTodos = state.filter((todo) => todo.id !== action.todo.id);
            return newTodos;
        case TypeKeys.LOAD_TODO:
            return action.todos;
        default:
            return state;
    }
};

export default todoReducer;
