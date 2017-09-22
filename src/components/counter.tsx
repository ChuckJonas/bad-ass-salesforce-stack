import * as React from 'react';

type Props = {
};
type State = {
  count: number,
};

export class Counter extends React.Component<Props, State> {
  interval: any;
  state = { count: 0 };

  componentWillMount() {
    const incrementCounter = () => {
      this.setState({ count: this.state.count + 1 });
    };
    this.interval = setInterval(incrementCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
