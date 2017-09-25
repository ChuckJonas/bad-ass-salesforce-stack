import { styles } from "@src/styles";
import { Button, Icon, Timeline } from "antd";
import * as React from "react";

interface ITodoItemProps {
  text: string;
  id: string;
  icon: string;
  iconColor: string;
  onClick(id: string): void;
}

interface ITodoItemState {
  loading: boolean;
}

export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  public markCompleteClick = (evt: React.FormEvent<any>) => {
    // don't call twice
    if (this.state.loading) {
      return;
    }

    this.setState({loading: true});
    this.props.onClick(this.props.id);
  }

  public render() {
    return (
      <li style={styles.lineItemStyle}>
        <Button
          loading={this.state.loading}
          onClick={this.markCompleteClick}
          style={{ color: this.props.iconColor, marginRight: 7 }}
          shape="circle"
          icon={this.props.icon}
        />
        {this.props.text}
      </li>
    );
  }
}
