import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-olive-200 py-4 select-none">
      <header className="flex justify-end px-8 mb-8">
        <button
          className="bg-olive-800 text-white uppercase px-5 py-2 rounded-lg shadow-md active:scale-95 hover:bg-olive-900 cursor-pointer transition"
          onClick={() => setToggle((prev) => !prev)}
        >
          New Card
        </button>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8 max-w-7xl mx-auto justify-items-center">
        {users.map((user, idx) => (
          <UserCard key={idx} users={user} />
        ))}
      </main>

      {toggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          <UserForm toggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;