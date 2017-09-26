import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer, {GlobalState} from "./reducers/index";

const initState: GlobalState = {todo: [], done: []};
const createGlobalStore = () => {
  return createStore<GlobalState>(reducer, initState, composeWithDevTools(applyMiddleware(thunk)));
};

export default createGlobalStore;
