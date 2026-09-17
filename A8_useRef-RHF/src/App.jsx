import React, { useState } from "react";
import FormUseRef from "./components/FormUseRef";
import UserCard from "./components/UserCard";
import FormRHF from "./components/FormRHF";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState([
    {
      name: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      bio: "JavaScript enthusiast who loves learning new technologies and building projects.",
    },
    {
      name: "Emma Davis",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      bio: "Creative developer interested in typography, interaction design, and frontend development.",
    },
    {
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
      bio: "Frontend developer who enjoys building clean and simple user interfaces with React.",
    },
    {
      name: "Sarah Williams",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
      bio: "Designer and developer focused on creating beautiful digital experiences.",
    },
  ]);

  return (
    <div className="min-h-screen bg-olive200 py-4 select-none">
      {/* Header */}
      <header className="flex justify-end px-8 mb-8">
        <button
          className="bg-olive-800 text-white uppercase px-5 py-2 font-mono rounded shadow-md active:scale-95 hover:bg-olive-900 cursor-pointer transition"
          onClick={() => setToggle((prev) => !prev)}
        >
          New Card
        </button>
      </header>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8 max-w-7xl mx-auto items-start">
        {users.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </main>

      {/* Form Modal */}
      {toggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs px-4">
          <FormRHF toggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
