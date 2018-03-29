import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer, {GlobalState} from "./reducers/index";

const createGlobalStore = () => {
  return createStore<GlobalState>(reducer, {} as GlobalState, composeWithDevTools(applyMiddleware(thunk)));
};

export default createGlobalStore;
