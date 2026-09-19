import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updateData, setUpdateData] = useState()

  const deleteCard = (id) => {
    let filterCard = users.filter((val, index) => {
      return id !== index;
    });
    setUsers(filterCard);
    localStorage.setItem("users", JSON.stringify(filterCard));
  };
  

  return (
    <div className="p-4 bg-olive-100 min-h-screen select-none">
      <Navbar toggle={setToggle} />
      {toggle ? (
        <main className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto items-start">
          {users.map((user) => {
            return (
              <Usercard
                key={user.id}
                user={user}
                toggle={setToggle}
                deleteCard={deleteCard}
                updateData={setUpdateData}
              />
            );
          })}
        </main>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs px-4">
          <Form toggle={setToggle} setUsers={setUsers} users={users} updateData={updateData} />
        </div>
      )}
    </div>
  );
};

export default App;
