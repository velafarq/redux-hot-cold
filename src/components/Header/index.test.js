import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("should render without crashing", () => {
    shallow(<Header />);
  });
  it("should render an h1 element within a header", () => {
    const wrapper = shallow(<Header />);
    const heading = wrapper.find("h1");
    expect(wrapper.type()).toEqual("header");
  });
});
