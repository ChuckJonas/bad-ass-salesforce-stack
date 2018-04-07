import { Card } from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card title='B.A.S.S. Blank!'>
          For a more interesting example, check out the redux-example or react-example branches!
      </Card>
    );
  }
}

export default hot(module)(App);
