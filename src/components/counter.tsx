import * as React from "react";

interface ICounterState {
  count: number;
}

export class Counter extends React.Component<{}, ICounterState> {
  public state = { count: 0 };
  private interval: any;

  public componentWillMount() {
    const incrementCounter = () => {
      this.setState({ count: this.state.count + 1 });
    };
    this.interval = setInterval(incrementCounter, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <h3>Behold the amazing counter!</h3>
        <p>You are no match for his powers...</p>
        <p>Your updates cannot destory him...</p>
        <p>Admire his will to survive...</p>
        <p>You find yourself helplessly falling in love...</p>
      </div>
    );
  }
}
