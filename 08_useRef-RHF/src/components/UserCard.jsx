import React from "react";

const UserCard = ({ user }) => {
  return (
    <article className="h-100 group bg-white/80 rounded-2xl shadow-lg overflow-hidden w-full max-w-sm transition-shadow duration-200 hover:shadow-xl">
      {/* Image */}
      <div className="h-52 bg-olive-100 overflow-hidden">
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-mono text-olive-900 truncate">
          {user.name}
        </h2>

        <div className="w-10 h-0.5 bg-olive-600 my-4" />

        <p className="text-sm leading-6 text-olive-800/80 wrap-break-words">
          {user.bio}
        </p>
      </div>
    </article>
  );
};

export default UserCard;
