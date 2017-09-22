import { AccountView, Counter } from "@src/components";
import { Card, Layout, LocaleProvider, Tabs } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import * as React from "react";
import { Account, AccountFields } from "./generated/sobs";

interface IAppState {
  account: AccountFields;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      account: {},
    };

    this.loadData().catch((e) => alert(e));
  }

  public render() {
    return (
      <LocaleProvider locale={enUS}>
      <Layout>
        <Layout.Content>
          <Card>
          <h1>Welcome to the future</h1>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Hot reload with persisted state" key="1">
              <Card>
                <Counter />
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="ts-force" key="2">
              <Card>
                <p>making the world a better place with type access to salesforce objects through generated classes</p>
                <AccountView account={this.state.account} />
              </Card>
            </Tabs.TabPane>
          </Tabs>
          </Card>
        </Layout.Content>
      </Layout>
      </LocaleProvider>
    );
  }

  private async loadData() {
    const account = (await Account.retrieve("SELECT Id, Name FROM Account limit 1"))[0];
    this.setState({account});
  }
}
