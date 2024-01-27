import React from "react";
import ClockGroup from "./components/ClockGroup";
import Clock from "./components/Clock";

export default function App() {
  return (
    <ClockGroup>
      <Clock city={"Sydney"} timezone={10} />
      <Clock city={"China"} timezone={8} />
      <Clock city={"London"} timezone={1} />
      <Clock city={"New York"} timezone={-4} />
    </ClockGroup>
  );
}
