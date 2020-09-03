import React, { useEffect } from "react";
import CounterApp from "./CounterApp";

const GenerateColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
};
const CounterView = (props) => {
  const { countValue, handleIncrement } = props;
  useEffect(() => {}, []);
  return (
    <div style={{ backgroundColor: GenerateColor() }}>
      <h2>{countValue}</h2>
      <button onClick={handleIncrement(2)}>Increment</button>
      <button onClick={handleIncrement(-5)}>Decrement</button>
    </div>
  );
};

export default CounterView;
