import React from "react";
import Greet from "./Greet";

const App = () => {
  return (
    <>
      <Greet
        name="hihi"
        element={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      >
        <p>Hello I am child</p>
      </Greet>
    </>
  );
};

export default App;
