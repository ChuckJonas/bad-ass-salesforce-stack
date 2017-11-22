import { Counter } from "@src/components"
import { Done, Todo} from "@src/containers";
import { Card, Layout, LocaleProvider, Tabs } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import * as React from "react";

export class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <LocaleProvider locale={enUS}>
          <Layout>
            <Layout.Content>
              <Card title="B.A.S.S. Starter">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="COUNTER" key="1" >
                     <Counter/>
                 </Tabs.TabPane >
                <Tabs.TabPane tab="TODO" key="2" >
                  <Todo />
                  <Done />
                 </Tabs.TabPane >
              </Tabs>
              </Card>
            </Layout.Content>
          </Layout>
      </LocaleProvider>
    );
  }
}
