// import actions
import { addDone, getTodos, removeTodo } from "@src/actions";
import { Add, TodoItem } from "@src/components";
import { Task } from "@src/generated/sobs";
import { GlobalState } from "@src/reducers";
import { Card, Timeline } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ITodoProps {
  todos: Task[];
  dispatch: Dispatch<GlobalState>;
}

class Todo extends React.Component<ITodoProps, {}> {
  public componentWillMount() {
    this.props.dispatch(getTodos());
  }

  public renderTodos() {
    if (this.props.todos) {
      return this.props.todos.map((t, i) => {
        return (
          <TodoItem
            text={t.description}
            key={i}
            index={i}
            icon="check"
            iconColor="#a3d666"
            onClick={this.markAsDone}
          />
        );
      });
    }
    return "";
  }

  public markAsDone = (index: number) => {
    const todo = this.props.todos[index];

    this.props.dispatch(removeTodo(todo))
    .then(() => {
      this.props.dispatch(addDone(todo));
    });
  }

  public render() {
    return (
      <div>
        <Card title="add new todo">
          <Add dispatch={this.props.dispatch} />
        </Card>
        <Card title={`${this.props.todos.length} todo${this.props.todos.length > 1 ? "s" : ""} remaining`}>
        <ul>
          {this.renderTodos()}
        </ul>
        </Card>
      </div>
    );
  }
}
export default connect((state: GlobalState) => {
  return { todos: state.todo };
})(Todo);
