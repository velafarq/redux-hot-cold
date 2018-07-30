import React from "react";
import { shallow } from "enzyme";

import { Feedback } from "./index";

describe("<Feedback />", () => {
  it("renders without crashing", () => {
    const dispatch = jest.fn();
    shallow(<Feedback feedback="" guesses={[]} dispatch={dispatch} />);
  });

  it("renders the feedback in an h2 element", () => {
    const feedback = "test feedback";
    const wrapper = shallow(<Feedback feedback={feedback} />);
    expect(wrapper.type()).toEqual("h2");
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});
