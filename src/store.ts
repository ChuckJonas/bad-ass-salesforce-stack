import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer, { GlobalState } from './reducers';

const createGlobalStore = () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  return createStore<GlobalState>(reducer, {} as GlobalState, composeWithDevTools(applyMiddleware(thunk)));
};

export default createGlobalStore;
