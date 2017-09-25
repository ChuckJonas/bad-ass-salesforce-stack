import { TASK_DONE_STATUS, TASK_TODO_STATUS } from "@src/constants";
import { Todo, TodoFields } from "@src/generated/sobs";
import { Dispatch } from "redux";
import { PromiseThunk, TypeKeys } from "./";

// action reducer types
export interface AddTodoAction {
  type: TypeKeys.ADD_TODO;
  todo: TodoFields;
}

export interface RemoveTodoAction {
  type: TypeKeys.REMOVE_TODO;
  todo: TodoFields;
}

export interface LoadTodoAction {
  type: TypeKeys.LOAD_TODO;
  todos: TodoFields[];
}

export const addTodo = (description: string): PromiseThunk<void> =>
  (dispatch) => {
    const todo = new Todo();
    todo.task = description;
    todo.done = false;

    const action: AddTodoAction = {
      type: TypeKeys.ADD_TODO,
      todo,
    };
    return todo.insert().then((r) => {
      dispatch(action);
    });
  };

export const removeTodo = (todo: TodoFields): PromiseThunk<void> =>
  (dispatch) => {
    // don't mutate origional.... clone
    const newTodo = new Todo(todo);
    newTodo.done = true;
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
    return Todo.retrieve(`SELECT Id, Task__c
              FROM Todo__c WHERE Done__c = false`)
      .then((todos) => {
        const action: LoadTodoAction = {
          type: TypeKeys.LOAD_TODO,
          todos,
        };
        dispatch(action);
      });
  };
