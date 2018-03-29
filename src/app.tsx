import {Done, Todo} from '@src/components';
import { Card, Layout, Tabs } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import * as React from 'react';

export class App extends React.Component<{}, {}> {

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
