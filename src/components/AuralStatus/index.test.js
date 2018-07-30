import React from "react";
import { shallow } from "enzyme";

import { AuralStatus } from "./index";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus auralStatus="test" />);
  });

  it("Renders the aural status in a p element", () => {
    const auralStatus = "test";
    const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
    expect(wrapper.type()).toEqual("p");
    expect(wrapper.text()).toEqual(auralStatus);
  });
});
