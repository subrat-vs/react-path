import React from "react";

const Card = ({images, del }) => {
  return (
    <>
      <div className="overflow-hidden rounded bg-white shadow-sm hover:shadow-lg">
        <img
          src={images.image}
          alt={images.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-4 flex justify-between items-end">
          <div>
            <h2 className="text-lg font-semibold">{images.title}</h2>
          </div>
          <button
            className="uppercase text-xs text-olive-500 font-mono cursor-pointer active:scale-99 hover:text-red-500"
            onClick={() =>  del(images.id) }
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
