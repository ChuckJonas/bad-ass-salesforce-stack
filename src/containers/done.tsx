import { loadDone, removeDone } from "@src/actions";
import { TodoItem } from "@src/components";
import { TaskFields } from "@src/generated/sobs";
import { GlobalState } from "@src/reducers";
import { styles } from "@src/styles";
import { Button, Card, Icon } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IDoneProps {
  doneList: TaskFields[];
  dispatch: Dispatch<GlobalState>;
}

class Done extends React.Component<IDoneProps, {}> {

  public componentWillMount() {
    // mountin component, load dones
    this.props.dispatch(loadDone());
  }

  public removeFromDone = (id: string) => {
    const todo = this.props.doneList.find((t) => {
      return t.id === id;
    });
    this.props.dispatch(removeDone(todo));
  }

  public render() {
    const items = this.props.doneList.map((done, i) => {
      return (
        <TodoItem
          text={done.description}
          key={done.id}
          id={done.id}
          icon="close"
          iconColor="#d67866"
          onClick={this.removeFromDone}
        />
      );
    });
    return (
      <Card title={`${this.props.doneList.length} todo${this.props.doneList.length > 1 ? "s" : ""} done`}>
        <ul>
          {items}
        </ul>
      </Card>);
  }
}

export default connect((state: GlobalState) => {
  return { doneList: state.done };
})(Done);
