import { Progress } from "antd";
import * as React from "react";

interface ICounterDisplayProps {
    circleFormat: (percent: number) => string; // no idea wtf this is
    circlePercent: number;
    linePercent: number;
    children?: JSX.Element;
}

export const CounterDisplay = (props: ICounterDisplayProps) => {
    return (
        <div>
            <Progress
                type="circle"
                format={props.circleFormat}
                percent={props.circlePercent}
            />
            <Progress type="line" showInfo={false} percent={props.linePercent} />
            <h3>Behold the mighty counter!</h3>
            <p>You are no match for his powers...</p>
            <p>Your updates cannot destory him...</p>
            <p>Admire his will to survive...</p>
            <p>You find yourself helplessly falling in love...</p>
            {props.children}
        </div>
    );
};