import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";


const Navbar = () => {
  let { setToggle } = useContext(MyStore)

  return (
    <div className="py-2 px-12 bg-olive-900 flex items-center justify-between text-white rounded font-mono">
      <div className="flex gap-8">
        <p className="cursor-pointer" onClick={() => setToggle(false)}>Home</p>
        <p className="cursor-pointer" onClick={() => setToggle(true)}>Cart</p>
      </div>

      <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-olive-100 active:scale-99 uppercase">
        Login
      </button>
    </div>
  );
};

export default Navbar;
