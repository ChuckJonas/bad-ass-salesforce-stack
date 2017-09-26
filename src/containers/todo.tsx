// import actions
import { addDone, addTodo, getTodos, removeTodo } from "@src/actions";
import { Add, TodoItem } from "@src/components";
import { TodoFields } from "@src/generated/sobs";
import { GlobalState } from "@src/reducers";
import { Card, Timeline } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ITodoProps {
  todos: TodoFields[];
  dispatch?: Dispatch<GlobalState>;
}

class Todo extends React.Component<ITodoProps, {}> {
  public componentWillMount() {
    this.props.dispatch(getTodos());
  }

  public renderTodos() {
    if (this.props.todos) {
      return this.props.todos.map((todo, i) => {
        return (
          <TodoItem
            text={todo.task}
            key={todo.id}
            id={todo.id}
            icon="check"
            iconColor="#a3d666"
            onClick={this.markAsDone}
          />
        );
      });
    }
    return "";
  }

  public markAsDone = (id: string) => {
    const todo = this.props.todos.find((t) => {
      return t.id === id;
    });

    this.props.dispatch(removeTodo(todo))
    .then(() => {
      this.props.dispatch(addDone(todo));
    });
  }

  public addTodo = (descr: string) => {
    return this.props.dispatch(addTodo(descr));
  }

  public render() {
    return (
      <div>
        <Card title="add new todo">
          <Add onAdd={this.addTodo}  />
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
export default connect((state: GlobalState): ITodoProps => {
  return { todos: state.todo };
})(Todo);
