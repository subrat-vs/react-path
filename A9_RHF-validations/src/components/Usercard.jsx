import React from "react";

const Usercard = ({ user }) => {
  return (
    <>
      <article className="min-h-100 group bg-white/80 rounded shadow-lg overflow-hidden w-full max-w-sm my-4">
        {/* Image */}
        <div className="h-60 bg-olive-100 overflow-hidden">
          <img
            src={user.url}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-2 border-b border-olive-600">
          <h2 className="text-2xl font-mono text-olive-900 truncate">
            {user.name}
          </h2>

          <div className="w-10 h-0.5 bg-olive-600 my-4" />

          <p className="text-sm leading-6 text-olive-800/80 wrap-break-words">
            {user.bio}
          </p>
        </div>

        <div className="text-xs tracking-wider flex justify-between px-8 my-4">
          <button className="uppercase cursor-pointer active:scale-95 hover:text-orange-600">
            Update
          </button>
          <button className="uppercase cursor-pointer active:scale-95 hover:text-red-600">
            Delete
          </button>
        </div>
      </article>
    </>
  );
};

export default Usercard;
