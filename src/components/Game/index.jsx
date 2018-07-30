import React from "react";

import Header from "../Header/index";
import GuessSection from "../GuessSection/index";
import StatusSection from "../StatusSection/index";
import InfoSection from "../InfoSection/index";

export default function Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
        <InfoSection />
      </main>
    </div>
  );
}
