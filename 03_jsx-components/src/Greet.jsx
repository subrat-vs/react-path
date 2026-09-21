import React from "react";

const Greet = ({ name, element, children }) => {
  return (
    <>
      <h1>Welcome {name}</h1>
      {element}
      {children}
    </>
  );
};

export default Greet;
