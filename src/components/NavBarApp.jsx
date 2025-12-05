import React from "react";
import { useState } from "react";

const NavBarApp = () => {
  const lista = [
    {
      id: 1,
      enlace: "#",
      name: "Inicio",
    },
    {
      id: 2,
      enlace: "#",
      name: "Servicios",
    },
    {
      id: 3,
      enlace: "#",
      name: "Contacto",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <header className="w-full bg-cyan-700 fixed top-0 opacity-85 flex flex-col md:flex-row z-10">
      <div className="flex justify-between w-full items-center">
        <div>
          <span className="  px-2 text-amber-50">
            <i
              className="fa fa-simplybuilt fa-2x transition-transform duration-700 ease-in-out hover:rotate-180"
              aria-hidden="true"
            ></i>
          </span>
        </div>
        <div className="flex justify-end md:hidden">
          <div onClick={() => setShow(!show)}>
            <i
              className="fa fa-bars fa-2x text-amber-50 p-2"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
      {show && (
        <nav>
          <ul className="mt-3 p-2 text-center text-slate-50 font-bold ">
            {lista.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </nav>
      )}
      <nav className="hidden md:flex md:justify-between items-center px-5  text-slate-50">
        <ul className="md:mt-0 p-2 text-center font-bold flex gap-4 ">
          {lista.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer 
            transition duration-500 ease-in-out hover:text-amber-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBarApp;
