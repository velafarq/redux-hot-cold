import React from "react";
import { shallow } from "enzyme";
import Game from "./index";

describe("<Game />", () => {
  it("Should render wihtout crashing", () => {
    shallow(<Game />);
  });

  it("Should render content in a div element", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.type()).toEqual("div");
  });
});
