// simple example of a react component, which renders all fields of a given account
import { Account, AccountFields} from '@src/generated/sobs';
import { Card, Form} from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader';

interface AccountDisplayProps {
  acc: AccountFields;
}

export class AccountDisplay extends React.Component<AccountDisplayProps, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    if (!this.props.acc){
      return <div>No Account Found</div>;
    }

    return (
      <Card title={this.props.acc.name}>
        <Form>
          {this.renderFields()}
        </Form>
      </Card>
    );
  }

  private renderFields = () => {
    return Object.keys(this.props.acc).map((key: keyof AccountFields) => {
      const meta = Account.FIELDS[key];
      if (meta && this.props.acc[key]) {
        return <Form.Item label={meta.salesforceLabel}>{this.props.acc[key].toString()}</Form.Item>;
      }
      return null;
    });

  }
}
