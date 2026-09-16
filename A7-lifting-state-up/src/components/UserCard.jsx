import React from "react";

const userCard = ({ toggle, users }) => {
  return (
    <>
      <div className="bg-olive-200 h-screen py-4 select-none">
        <div className="flex justify-end px-8 mb-4">
          <button
            className="bg-olive-800 text-white uppercase px-4 py-2 rounded active:scale-99 cursor-pointer"
            onClick={() => {
              toggle((prev) => !prev);
            }}
          >
            new card
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="p-4 h-75 w-100 flex flex-col justify-center mx-auto bg-white/40 rounded-2xl shadow-xl gap-4">
            <div className="flex justify-center">
              <img
                src= {users.url}
                alt= {users.name}
                className="size-40 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-olive-400">
              <h1 className="text-2xl  font-medium capitalize px-6 border-x">
                {users.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default userCard;
