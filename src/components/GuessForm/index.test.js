import React from "react";
import { shallow, mount } from "enzyme";

import { GuessForm } from "./index";
import { makeGuess } from "../../components/../actions/index";

describe("<GuessForm />", () => {
  it("should render without crashing", () => {
    const dispatch = jest.fn();
    shallow(<GuessForm dispatch={dispatch} />);
  });

  it("Should render form element", () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.type()).toEqual("form");
  });

  it("Should fire the dispatch", () => {
    const dispatch = jest.fn();
    const value = "10";
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it("Should reset the input when the form is submitted", () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("");
  });
});
