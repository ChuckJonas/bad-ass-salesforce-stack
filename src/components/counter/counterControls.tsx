import { Slider } from "antd";
import * as React from "react";
import { SliderValue } from "../../../node_modules/antd/lib/slider"

interface ICounterControlProps {
    defaultValue: SliderValue;
    onChangeHandler: (value: SliderValue) => void;
}

export const CounterControls = (props: ICounterControlProps) => {
    return <Slider defaultValue={props.defaultValue} onChange={props.onChangeHandler} />;
};
