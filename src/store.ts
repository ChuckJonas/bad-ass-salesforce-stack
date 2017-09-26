import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer, {GlobalState} from "./reducers/index";

const initState: GlobalState = {todo: [], done: []};
const createGlobalStore = () => {
  return createStore<GlobalState>(reducer, initState, applyMiddleware(thunk));
};

export default createGlobalStore;
