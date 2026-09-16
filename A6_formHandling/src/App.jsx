import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    let {name, value} = e.target
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form
        className="h-screen bg-olive-200 flex flex-col items-center justify-center gap-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="p-2 border-b outline-none w-xs"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          type="text"
        />
        <input
          className="p-2 border-b outline-none w-xs"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          type="password"
        />
        <button className="bg-blue-600 text-white py-2 w-xs rounded uppercase active:scale-99">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
