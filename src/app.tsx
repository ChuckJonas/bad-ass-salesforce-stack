import { Card, Drawer, Button } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import * as React from 'react';

// example use of file loader to load image
const bassLogo = require('@src/assets/images/bass-logo.jpg');

interface AppState {
  drawerVisible: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
    };
  }

  public render() {
    return (
      <Card title='B.A.S.S. Blank!'>
        <Drawer
          visible={this.state.drawerVisible}
          onClose={this.hideDrawer}
          title='FIIISSH'
          width={600}
        >
          <img src={bassLogo} />
        </Drawer>
        For more interesting examples, check out the redux-example or react-example branches!
        <br/>
        <Button onClick={this.showDrawer}>Click Me!</Button>
      </Card>
    );
  }

  private showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  }

  private hideDrawer = () => {
    this.setState({
      drawerVisible: false,
    });
  }
}

export default hot(module)(App);
