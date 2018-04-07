import { AccountDisplay } from '@src/components/accountDisplay';
import {Account, AccountFields} from '@src/generated/sobs';
import { Layout } from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { generateSelect } from 'ts-force';

interface AppState {
  acc: AccountFields;
}

class App extends React.Component<{}, AppState> {

  constructor(props) {
    super(props);

    this.state = {
      acc: null,
    };
  }

  public componentDidMount() {
    // get all fields
    Account.retrieve(`SELECT ${generateSelect(Object.values(Account.FIELDS))} FROM Account LIMIT 1`)
    .then((accs) => this.setState({acc: accs[0]}));
  }

  public render() {
    return <AccountDisplay acc={this.state.acc} />;
  }
}

export default hot(module)(App);
