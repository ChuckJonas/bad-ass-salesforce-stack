import { Card } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import * as React from 'react';

class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card title='B.A.S.S. Blank!'>
          Testingg le, check out the redux-example or react-example branches!
      </Card>
    );
  }
}

export default hot(module)(App);
