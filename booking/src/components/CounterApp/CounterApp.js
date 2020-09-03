import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CounterView from "./CounterView";

const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const [whatever, setWhatever] = useState(10);
  const { title } = props;
  const increment = (step) => () => setCount(count + step);
  const doWhatever = () => setWhatever(whatever + 1);
  useEffect(() => {}, []);

  return (
    <div>
      <h1>{title}</h1>
      <CounterView countValue={count} handleIncrement={increment} />
      <button onClick={doWhatever}>Do</button>
    </div>
  );
};

/* class CounterApp extends React.Component {
  state = {
    count: 0,
  };

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const title = this.props.title1;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
} */

export default CounterApp;
