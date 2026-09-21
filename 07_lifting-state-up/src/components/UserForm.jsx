import React, { useState } from "react";

const UserForm = ({ toggle, setUsers }) => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, formData]);

    setFormData({
      url: "",
      name: "",
    });

    toggle(false);
  };

  return (
    <form
      className="flex flex-col gap-6 bg-white p-12 items-center rounded-2xl shadow-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-olive-600 font-mono mb-6">
        Make your card
      </h1>

      <input
        value={formData.url}
        className="border-b p-2 text-sm w-xs outline-none"
        placeholder="Image URL"
        name="url"
        type="url"
        required
        autoComplete="off"
        onChange={handleChange}
      />

      <input
        value={formData.name}
        className="border-b p-2 text-sm w-xs outline-none"
        placeholder="Full Name"
        name="name"
        type="text"
        required
        autoComplete="off"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="uppercase bg-olive-900 text-white px-8 py-2 rounded active:scale-95 cursor-pointer"
      >
        Create Card
      </button>
    </form>
  );
};

export default UserForm;