import {mount, shallow} from "enzyme";
import * as React from "react";
import {Counter} from "../src/components/counter/counter";
import {TodoItem} from "../src/components/todo/todoItem";

it("test todo item button", () => {
  const mockCallback = jest.fn();
  // Use the method 'mount' to perform a full render
  const todoItem = mount((
    <TodoItem
      id="123"
      icon="check"
      text="todo"
      key="123"
      iconColor="green"
      onClick={mockCallback}
    />
  ));

  const btn = todoItem.find("Button");
  expect(btn.prop("loading")).toEqual(false);
  btn.simulate("click");
  expect(mockCallback.mock.calls.length).toBe(1);
  expect(btn.prop("loading")).toEqual(true);
});
