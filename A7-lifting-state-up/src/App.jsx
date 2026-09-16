import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);
  console.log(users);

  return (
    <>
      {toggle ? (
        <div className="bg-olive-200 h-screen flex items-center justify-center select-none">
          <UserForm toggle={setToggle} setUsers={setUsers} />
        </div>
      ) : (
        users.map((elem, idx) => <UserCard  key={idx} users={elem} toggle={setToggle} />)
      )}
    </>
  );
};

export default App;
