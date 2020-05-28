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

  test("renders button", () => {
    expect(wrapper.find("button").text()).toBe("Add");
  });

  test("renders one word when added", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "first" },
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toBe("first");
  });

  test("renders two words when added", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "first" },
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".input").prop("value")).toBe("");
    wrapper.find("input").simulate("change", {
      target: { value: "second" },
    });
    wrapper.find("button").simulate("click");
    console.log("here", wrapper.state());

    expect(wrapper.find("p").text()).toBe("first, second");
  });

  test("renders 3 words", () => {
    wrapper.setState({ printedWords: ["first", "second", "third"] });
    expect(wrapper.find("p").text()).toBe("first, second, third");
  });
});
