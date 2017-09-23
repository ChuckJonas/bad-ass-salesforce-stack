import { Task } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { AddTodoAction, ClearTodoAction, GetTodoAction, RemoveTodoAction } from "../reducers/todo";

export const addTodo = (todo: Task): AddTodoAction => {
    return {
        type: "ADD_TODO",
        add: todo,
    };
};

export const addTodoAsync = (todo: string): Dispatch<AddTodoAction> => {
    const t = new Task();
    t.description = todo;
    t.status = "open";
    return (dispatch: Dispatch<AddTodoAction>) => {
        t.insert().then((r) => {
            dispatch(addTodo(t));
        });
    };
};

// takes the index and removes it
export const removeTodo = (index: number): RemoveTodoAction => {
    return {
        type: "REMOVE_TODO",
        index,
    };
};

// remove all todos
export const clearTodo = (): ClearTodoAction => {
    return {
        type: "CLEAR_TODO",
    };
};

// load all todos
export const getTodos = (): Dispatch<GetTodoAction> => {
    return function(dispatch: Dispatch<GetTodoAction>){
        const openStatus = "open";
        Task.retrieve(`SELECT Id, Description, Status FROM Task WHERE Status='${openStatus}'`).then((tasks) => {
            dispatch({
                type: "GET_TODO",
                todo: tasks,
            });
        });
    };
};
