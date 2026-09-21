import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Midnight Espresso",
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=85",
      bio: "A quiet cup of espresso sitting beneath warm evening light.",
    },
    {
      id: 2,
      name: "Golden Mountains",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=85",
      bio: "Mountain peaks glowing under the last light of a disappearing sun.",
    },
    {
      id: 3,
      name: "Old Film Camera",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=85",
      bio: "An old camera waiting to capture something worth remembering.",
    },
    {
      id: 4,
      name: "Desert Silence",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&auto=format&fit=crop&q=85",
      bio: "Endless dunes, soft shadows, and nothing but silence.",
    },
    {
      id: 5,
      name: "Rainy Window",
      url: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1200&auto=format&fit=crop&q=85",
      bio: "Raindrops tracing their way down a cold window on a quiet night.",
    },
    {
      id: 6,
      name: "Vintage Porsche",
      url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&auto=format&fit=crop&q=85",
      bio: "Classic curves, polished metal, and the feeling of another era.",
    },
  ]);

  return (
    <div className="p-4 bg-olive-100 min-h-screen select-none">
      <Navbar toggle={setToggle} />
      {toggle ? (
        <main className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto items-start">
          {users.map((user) => {
            return <Usercard key={user.id} user={user} />;
          })}
        </main>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs px-4">
          <Form toggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
