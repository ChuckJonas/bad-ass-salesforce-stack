import { GlobalState } from '@src/reducers';
import { ThunkAction } from 'redux-thunk';

export * from './todo';

export enum ActionKeys {
  LOAD_TODOS = 'LOAD_TODOS',
  ADD_TODO = 'ADD_TODO',
  MARK_DONE = 'REMOVE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

// Shorthand thunk to return a promise.
// adding this type here will help simplify imports and code
export type PromiseThunk<T> = ThunkAction<Promise<T>, GlobalState, void>;
