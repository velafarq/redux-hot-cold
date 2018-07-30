import React from "react";
import { shallow } from "enzyme";
import { TopNav } from "./index";

import {
  GENERATE_AURAL_UPDATE,
  RESTART_GAME
} from "../../components/../actions/index";

describe("<TopNav />", () => {
  it("Should render without crashing", () => {
    shallow(<TopNav />);
  });

  it("should render content within a nav element", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.type()).toEqual("nav");
  });

  it("should dispatch restartGame when new game is clicked", () => {
    const dispatch = jest.fn();
    const correctAnswer = 2;
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".new");
    link.simulate("click", {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
  it("should dispatch generateAuralUpdate when Hear state of Game is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".status-link");
    link.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toEqual(GENERATE_AURAL_UPDATE);
  });
});
