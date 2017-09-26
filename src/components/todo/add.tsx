import { GlobalState } from "@src/reducers";
import { Button, Form, Input, message } from "antd";
import * as React from "react";
import { Dispatch } from "redux";

interface IAddProps {
  onAdd: (descr: string) => Promise<void>;
}

interface IAddState {
  description: string;
  loading: boolean;
}

export class Add extends React.Component<IAddProps, IAddState> {

  public state = { description: "" , loading: false};

  public handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState({loading: true}, () => {
      this.props.onAdd(this.state.description).then(() => {
        this.setState({loading: false, description: ""});
      }).catch((e) => {
        message.error(e.toString());
        this.setState({loading: false});
      });
    });
  }

  public updateDescription = (event: React.ChangeEvent<HTMLInputElement>)  => {
    this.setState({
      description: event.target.value,
    });
  }

  public render() {
    return (
      <Form layout="inline">
        <Form.Item label="Description">
          <Input
            readOnly={this.state.loading}
            value={this.state.description}
            onChange={this.updateDescription}
            onPressEnter={this.handleChange}
          />
          </Form.Item>
          <Form.Item>
          <Button onClick={this.handleChange} loading={this.state.loading} icon="plus" shape="circle" />
        </Form.Item>
      </Form>
    );
  }
}
