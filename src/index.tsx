import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setDefaultConfig } from 'ts-force';

import App from './app';

// add custom stylesheet
// tslint:disable-next-line:no-var-requires
require('@src/styles/styles.less');

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;

// setup ts-force auth
setDefaultConfig({
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
});

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
