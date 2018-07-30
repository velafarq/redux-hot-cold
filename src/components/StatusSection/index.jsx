import React from "react";

import GuessList from "../GuessList/index";
import GuessCount from "../GuessCount/index";
import AuralStatus from "../AuralStatus/index";

export default function StatusSection(props) {
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount />
      <GuessList />
      <AuralStatus />
    </section>
  );
}
