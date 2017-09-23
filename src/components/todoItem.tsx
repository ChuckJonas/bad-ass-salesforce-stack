import {styles} from "@src/styles";
import {Button, Icon, Timeline} from "antd";
import * as React from "react";
interface ItemProps {
        text: string;
        index: number;
        click?(action: any): void;
    }

export class TodoItem extends React.Component<ItemProps, {}> {
    public markCompleteClick = (evt: React.FormEvent<any>) => {
      this.props.click(this.props.index);
    }

    public render() {
        return (
            <li style={styles.lineItemStyle}>
              <Button onClick={this.markCompleteClick} style={{ color: "green", marginRight: 7 }} shape="circle" icon="check" />
              {this.props.text}
            </li>
        );
    }
}
