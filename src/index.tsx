// entry to allow for HMR.
//  DON'T TOUCH THIS UNLESS YOU KNOW WHAT YOURE DOING
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { Rest } from "ts-force";
import { App } from "./app";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer, {GlobalState} from "./reducers/index";

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;
declare var __ACCOUNTID__: string;

Rest.config = {
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
  version: 40,
};

const initState: GlobalState = {todo: [], done: []};
const store = createStore<GlobalState>(reducer, initState, applyMiddleware(thunk));

ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("root") as HTMLElement,
);

if (module.hot) {
    module.hot.accept();

    // reducers
    module.hot.accept("./reducers/index", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });

    // // epics
    // module.hot.accept('../modules/root-epic', () => {
    //   const newRootEpic = require('./root-epic').default;
    //   epicMiddleware.replaceEpic(newRootEpic);
    // });
}
