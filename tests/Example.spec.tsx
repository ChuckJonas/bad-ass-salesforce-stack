import {mount, shallow} from "enzyme";
import * as React from "react";
import {Counter} from "../src/components/counter";
import {TodoItem} from "../src/components/todoItem";

test("Checkbox has things", () => {
  // Render a checkbox with label in the document
  const counter = shallow(
    <Counter />,
  );

  expect(counter.find("h3").text()).toEqual("Behold the mighty counter!");

  counter.find("Slider").simulate("change");
  const progress = counter.find("Progress");
  expect(progress).toHaveLength(2);
  // expect(counter.text()).toEqual("On");
});

it("allows us to set props", () => {
  // Use the method 'mount' to perform a full render
  const foo = mount(<TodoItem id="123" icon="123" text="123" key="123" onClick={() => {}} iconColor="123" />);
  expect(foo.prop("id")).toBe("123");
  foo.setProps({ id: "foo" });
  expect(foo.prop("id")).toBe("foo");
});
