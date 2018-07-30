import {
  GENERATE_AURAL_UPDATE,
  generateAuralUpdate,
  RESTART_GAME,
  restartGame,
  MAKE_GUESS,
  makeGuess
} from "./index";

describe("generateAuralUpdate", () => {
  it("Should return the action", () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe("restartGame", () => {
  it("Should return the action", () => {
    const correctAnswer = 2;
    const action = restartGame(2);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe("makeGuess", () => {
  it("Should return the action", () => {
    const guess = 3;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
