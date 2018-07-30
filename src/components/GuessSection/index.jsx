import React from "react";

import Feedback from "../Feedback/index";
import GuessForm from "../GuessForm/index";

export default function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
}
