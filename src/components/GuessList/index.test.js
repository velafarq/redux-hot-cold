import React from "react";
import { GuessList } from "./index";
import { shallow } from "enzyme";

describe("<GuessList />", () => {
  it("should render without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("Should render a ul element with the guesses", () => {
    const guesses = [1, 2, 3];
    const wrapper = shallow(<GuessList guesses={[]} />);
    expect(wrapper.type()).toEqual("ul");
  });

  it("Renders a list of guesses", () => {
    const values = [10, 24, 52];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find("li");
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
