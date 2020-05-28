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
});
