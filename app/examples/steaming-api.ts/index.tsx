import * as React from 'react';
import { Card, Button, Form, Input, message, List, Spin, Badge, Switch, Icon, Row, Col } from 'antd';
import { SObjectStream, MappedStreamingEvent, buildQuery, FieldProps, QueryField } from 'ts-force';
import { Account, PushTopic } from '@src/generated';

const PUSH_TOPIC_NAME = 'BASS';

export interface IStreamingState {
  acc: Account;
  pushTopic: PushTopic;
  listening: boolean;
}

const ACCOUNT_FEILDS: Array<QueryField<Account>> = [
  'id',
  'name',
  'type',
  'phone',
  'shippingStreet',
  'shippingCity',
  'shippingState',
  'shippingCountry',
  'shippingPostalCode',
];


export default class Steaming extends React.Component<{}, IStreamingState> {

  private stream: SObjectStream;

  constructor(props: {}) {
    super(props);
    this.state = {
      acc: null,
      pushTopic: null,
      listening: false,
    };

    this.stream = new SObjectStream();
  }

  public async componentDidMount() {
    try {
      // load account for the first time:
      const acc = (await Account.retrieve((f) => (
        {
          select: f.select(ACCOUNT_FEILDS),
          limit: 1,
        }
      ))
      )[0];

      const pushTopics = (await PushTopic.retrieve((f) => (
        {
          select: ['id'],
          where: [{ field: 'name', val: PUSH_TOPIC_NAME }],
          limit: 1,
        }
      ))
      );

      if (pushTopics.length) {
        await this.connect();
      }

      this.setState({ acc, pushTopic: pushTopics[0] });
    } catch (e) {
      message.error('Failed to lead!');
    }
  }

  private connect = async () => {
    try {
      await this.stream.connect();
      await this.subscribe();
    } catch (e) {
      console.log(e);
      message.error('Failed to Connect!');
    }
  }

  private handleAccountUpdates = (e: MappedStreamingEvent<Account>) => {
    const acc = e.sObject;
    if (acc.id === this.state.acc.id) {
      this.setState({ acc });
    }
  }

  public componentWillUnmount() {
    this.stream.disconnect();
  }

  private createPushTopic = async () => {
    const pushTopic = new PushTopic({
      name: PUSH_TOPIC_NAME,
      description: 'For B.A.S.S. Example appilication',
      query: buildQuery(Account, (f) => (
        {
          select: f.select(ACCOUNT_FEILDS),
        }
      )),
      apiVersion: 42,
      notifyForOperationUpdate: true,
    });

    await pushTopic.insert();
    if (!this.stream.isConnected) {
      await this.connect();
    } else {
      await this.subscribe();
    }

    this.setState({ pushTopic });
  }

  private deletePushTopic = async () => {
    try {
      await this.state.pushTopic.delete();
      await this.stream.unsubscribe(PUSH_TOPIC_NAME);
      this.setState({ pushTopic: null });
    } catch (e) {
      message.error('Failed to remove push event!');
    }
  }

  private subscribe = async () => {
    try {
      await this.stream.subscribe({
        topic: PUSH_TOPIC_NAME,
        sObjectType: Account,
        onEvent: this.handleAccountUpdates,
      });
      this.setState({ listening: true });
    } catch (e) {
      message.error('Failed to Subscribe to Push Event!');
    }
  }

  private unsubscribe = async () => {
    try {
      await this.stream.unsubscribe(PUSH_TOPIC_NAME);
      this.setState({ listening: false });
    } catch (e) {
      message.error('Failed to unsubscribe to Push Event!');
    }
  }

  private toggleConnection = async () => {
    if (this.state.listening) {
      await this.unsubscribe();
    } else {
      await this.subscribe();
    }
  }

  public render() {
    const { acc, pushTopic, listening: connected } = this.state;
    return (
      <div>
        <Instructions pushTopic={pushTopic} onCreatePushTopic={this.createPushTopic} onDeletePushTopic={this.deletePushTopic} />
        <AccountDisplay acc={acc} pushTopic={pushTopic} connected={connected} onToggleConnection={this.toggleConnection} />
      </div>
    );
  }
}

interface AccountDisplayProps {
  acc: Account;
  pushTopic: PushTopic;
  connected: boolean;
  onToggleConnection: () => void;
}

function AccountDisplay(props: AccountDisplayProps) {
  if (!props.acc) {
    return <Spin tip='loading account' spinning={true} />;
  }

  let toggle = (
    <Switch
      disabled={!props.pushTopic}
      checked={props.connected}
      onChange={props.onToggleConnection}
      checkedChildren={<Icon type='sync' />}
      unCheckedChildren={<Icon style={{ color: 'red' }} type='disconnect' />}
    />
  )

  const title = <div>Account <Badge status={props.connected ? 'processing' : 'error'} /></div>;
  const fields = ACCOUNT_FEILDS.filter(f => f !== 'id' && props.acc[f]).map((f) => {
    const label = Account.FIELDS[f].salesforceLabel;
    return <Form.Item key={f} label={label}>{props.acc[f]}</Form.Item>;
  });
  let half = Math.ceil(fields.length / 2);
  return (
    <Card type='inner' title={title} extra={toggle}>
      <Form>
        <Row type='flex' justify='space-around'>
          <Col>{fields.slice(0, half)}</Col>
          <Col>{fields.slice(half, fields.length)}</Col>
        </Row>
      </Form>
    </Card>
  );
}

interface InstructionsProps {
  pushTopic: PushTopic;
  onCreatePushTopic: () => void;
  onDeletePushTopic: () => void;
}
function Instructions(props: InstructionsProps) {

  let btn = props.pushTopic ?
    <Button size='small' type={'danger'} onClick={props.onDeletePushTopic}>Delete Push Topic</Button> :
    <Button size='small' type={'primary'} onClick={props.onCreatePushTopic}>Setup the Example Push Topic</Button>

  let fields = ACCOUNT_FEILDS.map(f => <div><code>{Account.FIELDS[f].apiName}</code></div>);
  return (
    <Card type='inner' title='Instructions' extra={btn}>
      <div>
        The example demonstrates how to listening to streaming events using <code>ts-force</code>.
      </div>
      {!props.pushTopic && <div>Before this code will work, you must create a <a href='https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_create_pushtopic.htm'>PushTopic</a> </div>}


      {props.pushTopic && (
        <div>
          Monitoring the following fields: {fields}
        </div>
      )}

    </Card>
  );
}
