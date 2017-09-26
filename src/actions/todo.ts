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
  async (dispatch) => {
    const todo = new Todo();
    todo.task = description;
    todo.done = false;

    await todo.insert();
    const action: AddTodoAction = {
      type: TypeKeys.ADD_TODO,
      todo,
    };
    dispatch(action);
  };

export const removeTodo = (todo: TodoFields): PromiseThunk<void> =>
  async (dispatch) => {
    // don't mutate origional.... clone
    const newTodo = new Todo(todo);
    newTodo.done = true;

    // return promise so we can chain action
    await newTodo.update();
    const action: RemoveTodoAction = {
      type: TypeKeys.REMOVE_TODO,
      todo: newTodo,
    };
    dispatch(action);
  };

// load all todos
export const getTodos = (): PromiseThunk<void> =>
  async (dispatch) => {
    const todos = await Todo.retrieve(`SELECT Id, Task__c
              FROM Todo__c WHERE Done__c = false`);
    const action: LoadTodoAction = {
      type: TypeKeys.LOAD_TODO,
      todos,
    };
    dispatch(action);
  };
