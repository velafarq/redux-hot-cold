import React from "react";
import { shallow } from "enzyme";

import { GuessCount } from "./index";

describe("<GuessCount />", () => {
  it("Should render without crashing", () => {
    shallow(<GuessCount />);
  });

  it("Should render the guess count in an h2 element", () => {
    const guessCount = 3;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.type()).toEqual("h2");
    expect(wrapper.contains(guessCount)).toEqual(true);
  });
});
