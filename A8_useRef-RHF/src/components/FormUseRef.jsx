import React, { useRef, useState } from "react";

const FormUseRef = ({ toggle, setUsers }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const user = {
      name: formData.get("name"),
      image: formData.get("image"),
      bio: formData.get("bio"),
    };

    setUsers((prev) => [...prev, user]);
    formRef.current.reset();
    toggle(false);
  };  

  return (
    <>
      <div className="bg-white/80 py-8 px-12 rounded-2xl shadow-lg text-olive-600 w-full max-w-md">
        <div className="mb-8">
          <div className="flex justify-end">
            <span
              className="text-2xl hover:text-black active:scale-95"
              onClick={() => {
                toggle(false);
              }}
            >
              ×
            </span>
          </div>
          <h1 className="text-3xl font-mono">Create Your Card</h1>
        </div>

        <form
          className="flex flex-col gap-6 text-black"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            name="name"
            className="border-b border-olive-300 bg-transparent py-2 px-1 outline-none focus:border-olive-600 transition"
            type="text"
            placeholder="Your name"
            required
            autoComplete="off"
          />

          <input
            name="image"
            className="border-b border-olive-300 bg-transparent py-2 px-1 outline-none focus:border-olive-600 transition"
            type="text"
            placeholder="Image URL"
            required
            autoComplete="off"
          />

          <textarea
            name="bio"
            className="border-b border-olive-300 bg-transparent py-2 px-1 outline-none focus:border-olive-600 transition resize-none"
            rows="3"
            placeholder="Write a short bio..."
            required
            autoComplete="off"
          />

          <button
            type="submit"
            className="mt-4 bg-olive-800 text-white py-3 rounded font-mono hover:bg-olive-900 transition active:scale-99"
          >
            Create Card →
          </button>
        </form>
      </div>
    </>
  );
};

export default FormUseRef;
