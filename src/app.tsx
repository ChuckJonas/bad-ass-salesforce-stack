import { Card, Drawer, Button } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import * as React from 'react';
import { Account } from '@src/generated';

// example use of file loader to load image
import bassLogo from '@src/assets/images/bass-logo.jpg';

interface AppState {
  acc: Account;
  drawerVisible: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      acc: null,
      drawerVisible: false,
    };
  }

  public async componentDidMount() {
    // example account with contacts query
    const accs = await Account.retrieve((fields) => {
      return {
        select: [
          ...fields.select('id', 'name', 'website'),
          fields.subQuery('contacts', (cFields) => {
            return {
              select: cFields.select('id', 'name', 'email', 'phone'),
            };
          }),
        ],
        limit: 1,
      };
    });
    if (accs.length > 0) {
      this.setState({acc: accs[0]});
    }

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

  public render() {
    return (
      <Card title='B.A.S.S.'>
        <Drawer
          visible={this.state.drawerVisible}
          onClose={this.hideDrawer}
          title='An Account'
          width={600}
        >
          {this.state.acc && this.renderDrawerContent()}
        </Drawer>
        <img width={300} src={bassLogo} />
        <br />
        <Button type='primary' onClick={this.showDrawer}>Click Me!</Button>
      </Card>
    );
  }

  private renderDrawerContent = () => {
    const {acc} = this.state;

    const contactsList = acc.contacts.map((c) => {
      return (
        <Card type='inner' key={c.id}>
          <p><b>Name:</b> {c.name}</p>
          <p><b>Email:</b> {c.email}</p>
          <p><b>Phone:</b> {c.phone}</p>
        </Card>
      );
    });
    return (
      <div>
        <p><b>Name:</b> {acc.name}</p>
        <p><b>Website:</b> {acc.website}</p>
        <Card title='Contacts' extra={acc.contacts.length}>
          {contactsList}
        </Card>
      </div>
    );
  }
}

export default hot(module)(App);
