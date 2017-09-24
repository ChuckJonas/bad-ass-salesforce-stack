import {TASK_DONE_STATUS, TASK_TODO_STATUS} from "@src/constants";
import { Task } from "@src/generated/sobs";
import { Dispatch } from "redux";
import {TypeKeys} from "./";

// action reducer types
export interface AddTodoAction {
  type: TypeKeys.ADD_TODO;
  todo: Task;
}

export interface RemoveTodoAction {
  type: TypeKeys.REMOVE_TODO;
  todo: Task;
}

export interface LoadTodoAction {
  type: TypeKeys.LOAD_TODO;
  todos: Task[];
}

export const addTodo = (description: string): Dispatch<AddTodoAction> => {
  const todo = new Task();
  todo.description = description;
  todo.status = TASK_TODO_STATUS;
  return (dispatch: Dispatch<AddTodoAction>) => {
    const action: AddTodoAction = {
      type: TypeKeys.ADD_TODO,
      todo,
    };
    return todo.insert().then((r) => {
      dispatch(action);
    });
  };
};

export const removeTodo = (todo: Task): Dispatch<RemoveTodoAction> => {
  return (dispatch: Dispatch<RemoveTodoAction>) => {
    // don't mutate origional.... clone
    const newTodo = Object.assign({}, todo);
    newTodo.status = TASK_DONE_STATUS;
    const action: RemoveTodoAction = {
      type: TypeKeys.REMOVE_TODO,
      todo: newTodo,
    };

    // return promise so we can chain action
    return todo.update().then((r) => {
      dispatch(action);
    });
  };
};

// load all todos
export const getTodos = (): Dispatch<LoadTodoAction> => {
  return (dispatch: Dispatch<LoadTodoAction>) => {

    return Task.retrieve(`SELECT Id, Description, Status FROM Task WHERE Status='${TASK_TODO_STATUS}'`)
    .then((todos) => {
      const action: LoadTodoAction = {
        type: TypeKeys.LOAD_TODO,
        todos,
      };
      dispatch(action);
    });
  };
};
