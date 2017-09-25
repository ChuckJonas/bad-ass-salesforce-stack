import { addTodo } from "@src/actions";
import {GlobalState} from "@src/reducers";
import {Form, Input} from "antd";
import * as React from "react";
import {Dispatch} from "redux";
interface IAddProps {
    dispatch: Dispatch<GlobalState>;
}

export class Add extends React.Component<IAddProps, {}> {
    public handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            if (event.currentTarget.value) {
                this.props.dispatch(addTodo(event.currentTarget.value));
            }
            event.currentTarget.value = "";
        }
    }

    public render() {
        return(
          <Form layout="inline">
            <Form.Item label="Description">
              <Input type="text" onPressEnter={this.handleChange} />
            </Form.Item>
          </Form>
        );
    }
}
