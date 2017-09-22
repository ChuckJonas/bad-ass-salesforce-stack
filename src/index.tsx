// entry to allow for HMR.
//  DON'T TOUCH THIS UNLESS YOU KNOW WHAT YOURE DOING
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Rest } from "ts-force";
import { App } from "./app";

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;
declare var __ACCOUNTID__: string;

Rest.config = {
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
  version: 40,
};

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById("root") as HTMLElement,
);

if (module.hot) {
    module.hot.accept();

    // // reducers
    // module.hot.accept('../modules/root-reducer', () => {
    //   const newRootReducer = require('./root-reducer').default;
    //   store.replaceReducer(newRootReducer);
    // });

    // // epics
    // module.hot.accept('../modules/root-epic', () => {
    //   const newRootEpic = require('./root-epic').default;
    //   epicMiddleware.replaceEpic(newRootEpic);
    // });
}
