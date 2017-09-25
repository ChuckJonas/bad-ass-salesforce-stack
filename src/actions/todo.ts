import { TASK_DONE_STATUS, TASK_TODO_STATUS } from "@src/constants";
import { Task } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { PromiseThunk, TypeKeys } from "./";

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

export const addTodo = (description: string): PromiseThunk<void> =>
  (dispatch) => {
    const todo = new Task();
    todo.description = description;
    todo.status = TASK_TODO_STATUS;

    const action: AddTodoAction = {
      type: TypeKeys.ADD_TODO,
      todo,
    };
    return todo.insert().then((r) => {
      dispatch(action);
    });
  };

export const removeTodo = (todo: Task): PromiseThunk<void> =>
  (dispatch) => {
    // don't mutate origional.... clone
    const newTodo = Object.assign(new Task(), todo);
    newTodo.status = TASK_DONE_STATUS;
    const action: RemoveTodoAction = {
      type: TypeKeys.REMOVE_TODO,
      todo: newTodo,
    };

    // return promise so we can chain action
    return newTodo.update().then((r) => {
      dispatch(action);
    });
  };

// load all todos
export const getTodos = (): PromiseThunk<void> =>
  (dispatch) => {
    return Task.retrieve(`SELECT Id, Description, Status
              FROM Task WHERE Status='${TASK_TODO_STATUS}'`)
      .then((todos) => {
        const action: LoadTodoAction = {
          type: TypeKeys.LOAD_TODO,
          todos,
        };
        dispatch(action);
      });
  };
