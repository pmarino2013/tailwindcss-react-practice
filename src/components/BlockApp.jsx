import React from "react";

const BlockApp = ({ item }) => {
  return (
    <div className="bg-amber-500 shadow-md rounded-3xl  ">
      <img
        className="md:grayscale-100 w-80 object-cover h-80 hover:scale-105 transition duration-500 ease-in-out hover:grayscale-0"
        src={item.images[0]}
        alt={item.title}
      />
    </div>
  );
};

export default BlockApp;
