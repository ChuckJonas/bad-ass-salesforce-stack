import {Progress, Slider} from "antd";
import * as React from "react";
interface ICounterState {
  count: number;
  timeout: number;
}

export class Counter extends React.Component<{}, ICounterState> {
  public state = { count: 0, timeout: 300};
  private interval: any;

  constructor(props) {
    super(props);
    console.log("running constructor");
  }

  public componentWillMount() {
    if (!this.interval){
      this.incrementCounter();
    }
  }

  public incrementCounter = () => {
      console.log(`${this.state.timeout} ${this.state.count}`);
      this.setState({ count: this.state.count + 1 });
      this.interval = setTimeout(this.incrementCounter, this.state.timeout);
    }

  public onChange = (value: number) => {
    this.setState({timeout: (100 - value) * 10 });
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div>
        <Progress
          type="circle"
          format={(percent) => String(Math.floor(percent * 500))}
          percent={this.state.count / 500} />
        <Progress type="line" showInfo={false} percent={(this.state.count % 100)} />
        <h3>Behold the mighty counter!</h3>
        <p>You are no match for his powers...</p>
        <p>Your updates cannot destory him...</p>
        <p>Admire his will to survive...</p>
        <p>You find yourself helplessly falling in love...</p>

        <Slider defaultValue={100 - (this.state.timeout / 10)} onChange={this.onChange} />
      </div>
    );
  }
}
