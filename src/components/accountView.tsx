import { AccountFields } from "@gen/sobs";
import {Form} from "antd";
import * as React from "react";

interface IAccountViewProps {
  account: AccountFields;
}

export class AccountView extends React.Component<IAccountViewProps, {}> {

  public render() {
    return (
      <Form>
        <div>ttin</div>
        <Form.Item label="Account Name"> <span>{this.props.account.name}</span></Form.Item>
      </Form>
    );
  }
}
