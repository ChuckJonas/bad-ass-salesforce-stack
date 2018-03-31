import { deleteTodo } from '@src/actions';
import { TodoItem } from '@src/components';
import { TodoFields } from '@src/generated/sobs';
import { GlobalState } from '@src/reducers';
import { getDone } from '@src/selectors/todoSelector';
import { Card, List } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IDoneProps {
  doneList: TodoFields[];
  dispatch?: Dispatch<GlobalState>;
}

class Done extends React.Component<IDoneProps, {}> {

  public removeFromDone = (id: string) => {
    this.props.dispatch(deleteTodo(id));
  }

  public render() {
    return (
      <Card title={`${this.props.doneList.length} item${this.props.doneList.length > 1 ? 's' : ''} done`}>
        <List
          dataSource={this.props.doneList}
          renderItem={this.renderTodoItem}
        />
      </Card>
    );
  }

  private renderTodoItem = (item) => {
    return (
      <List.Item extra=''>
        <TodoItem
          text={item.task}
          key={item.id}
          id={item.id}
          icon='close'
          iconColor='#d67866'
          onClick={this.removeFromDone}
        />
      </List.Item>
    );
  }
}

export default connect((state: GlobalState): IDoneProps => {
  return { doneList: getDone(state) };
})(Done);
