import reducer from "./index";
import { restartGame, makeGuess, generateAuralUpdate } from "../actions/index";

describe("reducer", () => {
  const guess1 = 1;
  const guess2 = 20;
  const guess3 = 45;
  const guess4 = 50;
  const feedback = "Test feedback";
  const auralStatus = "You are here";
  const correctAnswer = 55;

  it("Should set the initial state when nothing is passed in", () => {
    const state = reducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: state.correctAnswer
    });
  });

  it("Should return the current state on an unknown action", () => {
    const currentState = {};
    const state = reducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("restartGame", () => {
    it("should start a new game with a initial state and a new correct answer", () => {
      let state;
      state = reducer(state, restartGame(correctAnswer));
      expect(state).toEqual({
        guesses: [],
        feedback: "Make your guess!",
        auralStatus: "",
        correctAnswer: correctAnswer
      });
    });
  });

  describe("makeGuess", () => {
    it("add the current guess to guesses", () => {
      let state;
      state = reducer(state, makeGuess(guess1));
      state = reducer(state, makeGuess(guess2));
      expect(state.guesses).toEqual([1, 20]);
    });

    it("returns correct feedback based on the current guess", () => {
      let state;
      state = reducer(state, restartGame(correctAnswer));
      state = reducer(state, makeGuess(guess1));
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(guess2));
      expect(state.feedback).toEqual("You're Cold...");

      state = reducer(state, makeGuess(guess3));
      expect(state.feedback).toEqual("You're Warm.");

      state = reducer(state, makeGuess(guess4));
      expect(state.feedback).toEqual("You're Hot!");

      state = reducer(state, makeGuess(correctAnswer));
      expect(state.feedback).toEqual("You got it!");
    });
  });

  describe("generateAuralUpdate", () => {
    it("should generate initial aural feedback upon start of game", () => {
      let state;
      state = reducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        `Here's the status of the game right now: Make your guess! You've made 0 guesses.`
      );
    });

    it("should change the aural update based on current guess and know if more than one guess has been made.", () => {
      let state;
      state = reducer(state, restartGame(correctAnswer));
      state = reducer(state, makeGuess(guess1));
      state = reducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        `Here's the status of the game right now: You're Ice Cold... You've made ${
          state.guesses.length
        } guess. It was: ${guess1}`
      );

      state = reducer(state, makeGuess(guess2));
      state = reducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        `Here's the status of the game right now: You're Cold... You've made ${
          state.guesses.length
        } guesses. In order of most- to least-recent, they are: ${guess2}, ${guess1}`
      );
    });
  });
});
