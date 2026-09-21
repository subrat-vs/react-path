import React from "react";
import { useState } from "react";

const Counter = () => {
  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const [count, setCount] = useState(getRandomNumber(10));

  const handleClick = () => {
    setCount((prev) => prev - 1);
    if (count === 0) {
      setCount(getRandomNumber(10));
    }
  };

  return (
    <>
      <h1 className="text-7xl">
        Let's start with <span>{count}</span>
      </h1>
      <button
        className="text-2xl px-6 py-2 bg-blue-600 active:scale-99 rounded uppercase"
        onClick={handleClick}
      >
        PLAY
      </button>
    </>
  );
};

export default Counter;
