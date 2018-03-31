import { Todo, TodoFields } from '@src/generated/sobs';
import { ActionKeys, PromiseThunk } from './';

// action reducer types
export interface LoadTodoAction {
  type: ActionKeys.LOAD_TODOS;
  todos: TodoFields[];
}

export interface AddTodoAction {
  type: ActionKeys.ADD_TODO;
  todo: TodoFields;
}

export interface MarkDoneAction {
  type: ActionKeys.MARK_DONE;
  todoId: string;
}

export interface DeleteTodoAction {
  type: ActionKeys.DELETE_TODO;
  id: string;
}

// load all todos
export const loadTodos = (): PromiseThunk<void> =>
  async (dispatch) => {
    const todos = await Todo.retrieve(`SELECT Id, Task__c, Done__c FROM Todo__c`);
    const action: LoadTodoAction = {
      type: ActionKeys.LOAD_TODOS,
      todos,
    };
    dispatch(action);
  };

export const addTodo = (description: string): PromiseThunk<void> =>
  async (dispatch) => {
    const todo = new Todo();
    todo.task = description;
    todo.done = false;

    await todo.insert();
    const action: AddTodoAction = {
      type: ActionKeys.ADD_TODO,
      todo,
    };
    dispatch(action);
  };

export const markDone = (todo: TodoFields): PromiseThunk<void> =>
  async (dispatch) => {
    // don't mutate origional.... clone
    const newTodo = new Todo(todo);
    newTodo.done = true;

    // return promise so we can chain action
    await newTodo.update();
    const action: MarkDoneAction = {
      type: ActionKeys.MARK_DONE,
      todoId: newTodo.id,
    };
    dispatch(action);
  };

// for async calls use thunk.  A thunk is a function that returns a function.
// The inner return type can be promise to help chain actions together
export const deleteTodo = (id: string): PromiseThunk<void> =>
  async (dispatch) => {
    const newDone = new Todo({id});
    await newDone.delete();
    const action: DeleteTodoAction = {
        type: ActionKeys.DELETE_TODO,
        id,
    };
    dispatch(action);
  };
