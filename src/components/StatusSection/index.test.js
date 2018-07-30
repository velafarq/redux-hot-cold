import React from "react";
import StatusSection from "./index";
import { shallow } from "enzyme";

describe("<StatusSection />", () => {
  it("should render without crashing", () => {
    shallow(<StatusSection />);
  });
});
