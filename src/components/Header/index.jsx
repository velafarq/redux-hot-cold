import React from "react";

import TopNav from "../TopNav/index";

import "./header.css";

export default function Header(props) {
  return (
    <header>
      <TopNav />
      <h1>HOT or COLD</h1>
    </header>
  );
}
