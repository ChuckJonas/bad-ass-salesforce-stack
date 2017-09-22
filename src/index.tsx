import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {App} from './app';

import { Rest } from 'ts-force';

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;
declare var __ACCOUNTID__: string;

Rest.config = {
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
  version: 40
};

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

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
