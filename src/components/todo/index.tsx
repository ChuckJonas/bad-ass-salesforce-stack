// import actions
import { addTodo, markDone } from '@src/actions';
import { TodoItem } from '@src/components';
import { TodoFields } from '@src/generated/sobs';
import { GlobalState } from '@src/reducers';
import { getTodo } from '@src/selectors/todoSelector';
import { Card, List, Timeline } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Add } from './add';

interface ITodoProps {
  todoList: TodoFields[];
  dispatch?: Dispatch<GlobalState>;
}

class Todo extends React.Component<ITodoProps, {}> {

  public markAsDone = (id: string) => {
    const todo = this.props.todoList.find((t) => {
      return t.id === id;
    });

    this.props.dispatch(markDone(todo));
  }

  public addTodo = (descr: string) => {
    return this.props.dispatch(addTodo(descr));
  }

  public render() {
    return (
      <div>
        <Card className='add-header' title='Add new todo'>
          <Add onAdd={this.addTodo}  />
        </Card>
        <Card title={`${this.props.todoList.length} todo${this.props.todoList.length > 1 ? 's' : ''} remaining`}>
        <List
          dataSource={this.props.todoList}
          renderItem={this.renderTodo}
        />
        </Card>
      </div>
    );
  }

  private renderTodo = (item) => {
    return (
      <List.Item extra=''>
        <TodoItem
          text={item.task}
          key={item.id}
          id={item.id}
          icon='check'
          iconColor='#a3d666'
          onClick={this.markAsDone}
        />
      </List.Item>
    );
  }
}
export default connect((state: GlobalState): ITodoProps => {
  return { todoList: getTodo(state) };
})(Todo);
