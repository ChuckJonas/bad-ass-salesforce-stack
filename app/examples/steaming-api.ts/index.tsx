import * as React from 'react';
import { Card, Button, Form, Input, message, List, Spin } from 'antd';
import { SObjectStream, MappedStreamingEvent } from 'ts-force';
import { Account, PushTopic } from '@src/generated';

const PUSH_TOPIC_NAME = 'BASS';

export interface IStreamingState {
  acc: Account;
  pushTopic: PushTopic;
}

export default class Steaming extends React.Component<{}, IStreamingState> {

  private stream: SObjectStream;

  constructor(props: {}) {
    super(props);
    this.state = {
      acc: null,
      pushTopic: null,
    };
  }

  public async componentDidMount() {
    // load account for the first time:
    const acc = (await Account.retrieve((f) => (
        {
          select: [...f.select('id', 'name', 'type', 'phone')],
          limit: 1,
        }
      ))
    )[0];

    const pushTopics = (await PushTopic.retrieve((f) => (
      {
        select: ['id'],
        where: [ {field: 'name', val: PUSH_TOPIC_NAME} ],
        limit: 1,
      }
    ))
    );

    // if(pushTopics.length){
    this.stream = new SObjectStream();
    this.stream.connect((m: any) => {
      if (m.successful) {
        this.stream.subscribe({
          topic: PUSH_TOPIC_NAME,
          onSubscriptionChange: (m: any) => console.log(m),
          sObjectType: Account,
          onEvent: this.handleAccountUpdates,
        });
      }
    });

    this.setState({acc, pushTopic: pushTopics[0]});
  }

  private handleAccountUpdates = (e: MappedStreamingEvent<Account>) => {
    const acc = e.sObject;
    if (acc.id === this.state.acc.id) {
      this.setState({acc});
    }
  }

  public componentWillUnmount() {
    this.stream.disconnect();
  }

  public render() {
    const {acc} = this.state;
    return (
      <div>
        <Instructions />
        <AccountDetails acc={acc} />
      </div>
    );
  }
}

export interface AccountListItemProps {
  acc: Account;
}

function AccountDetails(props: AccountListItemProps) {
  if (!props.acc) {
    return <Spin spinning={true} />;
  }
  return (
    <Card type='inner' title='Account' extra={<a target='_blank' href={`/${props.acc.id}`}>Open</a>}>
      <Form layout='inline'>
        <Form.Item label='Name'>{props.acc.name}</Form.Item>
        <Form.Item label='Type'>{props.acc.type}</Form.Item>
        <Form.Item label='Type'>{props.acc.phone}</Form.Item>
      </Form>
    </Card>
  );
}

function Instructions() {
  const code =
    `
      PushTopic pushTopic = new PushTopic();
      pushTopic.ApiVersion = 42.0;
      pushTopic.Name = 'BASS';
      pushTopic.Description = 'BASS Streaming Example';
      pushTopic.NotifyForOperationUpdate = true;
      pushTopic.Query = 'SELECT Id, Name, Type FROM Account';
      insert pushTopic;
      `;
  return (
    <Card type='inner' title='Instructions'>
      <div>
        The example demonstrates how to listening to streaming events using <code>ts-force</code>.
      </div>
      <div>Before this code will work, you must setup your streaming topic by executing the following apex:</div>
      <pre style={{ whiteSpace: 'pre-line' }}><code>
        {code}
      </code></pre>
      Once the <code>PushTopic</code> has been created,
      open the account below in a new tab and modify one of the displayed fields
    </Card>
  );
}
