import React from "react";
import GuessSection from "./index";

import { shallow } from "enzyme";

describe("<GuessSection />", () => {
  it("should render without crashing", () => {
    shallow(<GuessSection />);
  });
});
