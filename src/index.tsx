import { loadTodos } from '@src/actions';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Rest } from 'ts-force';

import App from './app';
import createGlobalStore from './store';

// add custom stylesheet
// tslint:disable-next-line:no-var-requires
require('@src/styles/styles.less');

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;

// setup ts-force auth
Rest.config = {
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
  version: 40,
};

// setup redux
const store = createGlobalStore();
// fire load data action
store.dispatch(loadTodos());

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
    ,
    document.getElementById('root') as HTMLElement,
);
