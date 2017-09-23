import {styles} from "@src/styles";
import {Button, Icon, Timeline} from "antd";
import * as React from "react";
interface ItemProps {
        text: string;
        index: number;
        icon: string;
        iconColor: string;
        onClick(index: number): void;
    }

export class TodoItem extends React.Component<ItemProps, {}> {
    public markCompleteClick = (evt: React.FormEvent<any>) => {
      this.props.onClick(this.props.index);
    }

    public render() {
        return (
            <li style={styles.lineItemStyle}>
              <Button
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
