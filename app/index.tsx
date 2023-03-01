import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { setDefaultConfig } from 'ts-force';

// globals. set on page window
declare let __RESTHOST__: string;
declare let __ACCESSTOKEN__: string;

// setup ts-force auth
setDefaultConfig({
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
});


ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
