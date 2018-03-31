import { Done, Todo } from '@src/components';
import { Card, Layout } from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Layout>
        <Layout.Content>
          <Card title='B.A.S.S. Starter TODO Example'>
              <Todo />
              <Done />
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}

export default hot(module)(App);
