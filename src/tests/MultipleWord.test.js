import React from "react";
import MultipleWord from "../comonents/MultipleWords";
import { shallow } from "enzyme";

describe("multiple word input with hooks", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MultipleWord />);
  });

  test("renders title", () => {
    expect(wrapper.find("h1").text()).toBe("Add many words!");
  });

  test("renders input with placeholder text", () => {
    expect(wrapper.find(".input").prop("placeholder")).toBe("Your word...");
    expect(wrapper.find(".input").prop("value")).toBe("");
  });
});
