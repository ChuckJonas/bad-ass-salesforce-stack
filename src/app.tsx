import { Counter } from '@src/components';
import {Card, Layout} from 'antd';
import * as React from 'react';

type Props = {
};

export class App extends React.Component<Props, {}> {
  render() {
    return (
      <Layout>
        <Layout.Content>
        <Card>
          <h1>React/ Redux / Typescript / ANTD / Webpack  - App Starter</h1>
          <p>Hot reload with persisted state!</p>
          <Counter />
        </Card>
        </Layout.Content>
      </Layout>
    );
  }
}
