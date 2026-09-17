import React from "react";

const UserCard = ({ users }) => {
  return (
    <div className="w-full max-w-80 min-h-96 p-6 flex flex-col items-center justify-center gap-6 bg-white/45 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg">
      <div className="size-44 p-1 rounded-full bg-white/60 shadow-md">
        <img
          src={users.url}
          alt={users.name}
          className="size-full rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-olive-500">
          User
        </span>

        <h1 className="text-2xl font-medium capitalize text-olive-900 px-6 py-1 border-x border-olive-300">
          {users.name}
        </h1>
      </div>
    </div>
  );
};

export default UserCard;