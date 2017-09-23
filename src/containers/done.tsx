import { getDone, removeDone } from "@src/actions";
import { TodoItem } from "@src/components";
import { Task } from "@src/generated/sobs";
import {styles} from "@src/styles";
import {Button, Card, Icon} from "antd";
import * as React from "react";
import { connect } from "react-redux";

interface IDoneProps {
    doneList: Task[];
    dispatch(action: any): any;
}

class Done extends React.Component<IDoneProps, {}> {

    public componentWillMount() {
        // mountin component, load dones
        this.props.dispatch(getDone());
    }

    public renderDone() {
        if (this.props.doneList) {
            return this.props.doneList.map((done, i) => {
                return (
                  <TodoItem
                    text={done.description}
                    key={i}
                    index={i}
                    icon="close"
                    iconColor="#d67866"
                    onClick={this.removeFromDone}
                  />
                );
            });
        }
        return "";
    }

    public removeFromDone = (index: number) => {
        this.props.dispatch(removeDone(index));
    }
    public render() {
        return (
            <Card title={`${this.props.doneList.length} todo${this.props.doneList.length > 1 ? "s" : ""} done`}>
              <ul id="done-items" className="list-unstyled">
                  {this.renderDone()}
              </ul>
            </Card>);
    }
}

export default connect((state) => {
   return { doneList: state.done };
})(Done);
