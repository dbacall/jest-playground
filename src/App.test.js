import React from "react";
import App from "./App";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("word change component", () => {
  test("render shows heading", () => {
    expect(wrapper.find("h1").text()).toContain("Crazy Word Changer!!");
  });

  test("renders input for word", () => {
    expect(wrapper.find("#word-input").prop("placeholder")).toBe(
      "Your word..."
    );
  });

  test("renders submit button", () => {
    expect(wrapper.find("#btn").text()).toBe("Update");
  });

  test("renders state change on input change and updates div when click button", () => {
    wrapper.find("#word-input").simulate("change", {
      target: {
        value: "word",
      },
    });
    console.log(wrapper.state());
    wrapper.find("#btn").simulate("click");
    console.log(wrapper.state());

    expect(wrapper.find("#your-word").text()).toBe("word");
  });
});
