import React from "react";
import { shallow } from "enzyme";
import InfoSection from "./index";

describe("<InfoSection />", () => {
  it("Renders without crashing", () => {
    shallow(<InfoSection />);
  });
  it("Renders within a section element", () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.type()).toEqual("section");
  });
});
