import React from "react";
import Welcome from "./Welcome";
import { useState } from "react";

const App = () => {
  const [coins, setCoins] = useState(0);
  const handleClick = () => {
    setCoins(coins + 63);
    if (coins >= 882) {
      setCoins(0);
    }
  };

  return (
    <>
      <div className="h-screen p-18 rounded text-2xl select-none flex flex-col gap-12">
        <Welcome name="Caption Jack Sparrow" />

        <div className="flex gap-8 items-center">
          <p>collect cursed Aztec gold coins {coins}/882</p>
          <button
            className="px-4 py-2 bg-olive-600 text-white active:scale-99 uppercase rounded"
            onClick={handleClick}
          >
            {coins === 882 ? "reset" : "collect 63 coins"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
