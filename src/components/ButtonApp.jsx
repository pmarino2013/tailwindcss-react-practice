import React from "react";

const ButtonApp = ({ title, action, background, bghover }) => {
  return (
    <div>
      <button
        className={`${background} rounded-3xl text-amber-50 px-3 py-2 font-bold ${bghover} transition duration-500 ease-in-out hover:scale-110`}
        // color={background}
        onClick={action}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonApp;
