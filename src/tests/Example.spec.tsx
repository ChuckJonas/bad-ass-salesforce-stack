import {TodoItem} from "@src/components/shared/todoItem";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

configure({ adapter: new Adapter() });

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

  let btn = todoItem.find("Button");
  expect(btn.prop("loading")).toEqual(false);
  btn.simulate("click");
  todoItem.update();
  btn = todoItem.find("Button");
  expect(mockCallback.mock.calls.length).toBe(1);
  expect(btn.prop("loading")).toEqual(true);
});
