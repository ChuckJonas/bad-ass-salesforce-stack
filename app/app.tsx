import { Card, Drawer, Button, Divider } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import * as React from 'react';
import { Account } from '@src/generated';

// example use of file loader to load image
import bassLogo from '@src/assets/images/bass-logo.jpg';
import Steaming from './examples/steaming-api.ts';

interface AppState {
  example: 'streaming' | 'other';
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      example: 'streaming',
    };
  }

  public render() {
    const {example} = this.state;
    return (
      <Card title='B.A.S.S.' extra={<img src={bassLogo} width={50}/>}>
        <span>Select Example: </span>
        <Button.Group>
          <Button onClick={() => this.setState({example: 'streaming'})}>Streaming</Button>
          <Button onClick={() => this.setState({example: 'other'})}>Other</Button>
        </Button.Group>
        <Divider />
        {example === 'streaming' && <Steaming />}
        {example === 'other' && <div>placeholder</div>}
      </Card>
    );
  }

}

export default hot(module)(App);
