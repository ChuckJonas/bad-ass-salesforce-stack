// most badass counter ever.  Does not use redux
import * as React from "react";
import { CounterControls } from "./counterControls";
import { CounterDisplay } from "./counterDisplay";
interface ICounterState {
    count: number;
    timeout: number;
    run: boolean;
}

const counterGoal = 50000;

export class Counter extends React.Component<{}, ICounterState> {
    public state = { count: 0, timeout: 300, run: true };
    private interval: any;

    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        if (!this.interval) {
            this.incrementCounter();
        }
    }

    public incrementCounter = () => {
        this.setState({ count: this.state.count + 1 });
        if (this.state.run) {
            this.interval = setTimeout(this.incrementCounter, this.state.timeout);
        }
    }

    public onRateChange = (value: number) => {
        this.setState({ timeout: (100 - value) * 10 });
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public formatProgress(percent) {
        return String(Math.floor(percent * (counterGoal / 100)));
    }

    public render() {
        return (
            <div>
                <CounterDisplay
                    circleFormat={this.formatProgress}
                    circlePercent={this.state.count / (counterGoal / 100)}
                    linePercent={(this.state.count % 100)}
                >
                    <CounterControls
                        defaultValue={100 - (this.state.timeout / 10)}
                        onChangeHandler={this.onRateChange}
                    />
                </CounterDisplay>
            </div>
        );
    }
}
