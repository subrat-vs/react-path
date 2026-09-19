import React from "react";

const Navbar = ({ toggle }) => {
  return (
    <div className="py-2 px-12 bg-olive-900 flex items-center justify-between text-white rounded font-mono">
      <h1 className="text-2xl uppercase">Logo</h1>
      <div className="flex gap-8">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>

      <button
        className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-olive-100 active:scale-99 uppercase"
        onClick={() => {
          toggle((prev) => !prev);
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
