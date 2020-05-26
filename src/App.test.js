import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

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

  test("renders state change on input change and updates div when click button", () => {
    wrapper.find("#word-input").simulate("change", {
      target: {
        value: "word",
      },
    });
    expect(wrapper.find("#your-word").text()).toBe("word");
  });
});
