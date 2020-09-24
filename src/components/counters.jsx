import React, { Component } from "react";
import Counter from "./counter";

const Counters = (props) => {
  console.log(props);
  const { onReset, onIncrement, onDecrement, onDelete, counters } = props;
  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
