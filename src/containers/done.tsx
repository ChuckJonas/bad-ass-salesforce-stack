import { getDone, removeDone } from "@src/actions";
import { Task } from "@src/generated/sobs";
import {styles} from "@src/styles";
import {Button, Card, Icon} from "antd";
import * as React from "react";
import { connect } from "react-redux";

interface IDoneProps {
    done: Task[];
    dispatch(action: any): any;
}

class Done extends React.Component<IDoneProps, {}> {

    public componentWillMount(){
        // mountin component, load dones
        this.props.dispatch(getDone());
    }

    public renderDone(){
        if (this.props.done){
            return this.props.done.map((d, i) => {
                return (
                    <li style={styles.lineItemStyle} key={i}>
                      <Button onClick={(e) => { this.removeFromDone(i); }} style={{ color: "red", marginRight: 7 }} shape="circle" icon="close" />
                      {d.description}
                    </li>
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
            <Card title={`${this.props.done.length} todo${this.props.done.length > 1 ? "s" : ""} remaining`}>
              <ul id="done-items" className="list-unstyled">
                  {this.renderDone()}
              </ul>
            </Card>);
    }
}

export default connect((state) => {
   return { done: state.done };
})(Done);
