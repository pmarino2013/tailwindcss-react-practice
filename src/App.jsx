import React from "react";
import ButtonApp from "./components/ButtonApp";
import CardApp from "./components/CardApp";
import logo from "./assets/logo_energy.png";
import GalleryApp from "./components/GalleryApp";
import NavBarApp from "./components/NavBarApp";

const App = () => {
  return (
    <>
      <NavBarApp />
      <div className="flex justify-center items-center mt-15 flex-col gap-3">
        <h1 className="text-4xl font-bold text-cyan-700">Hola Tailwindcss!!</h1>
        <ButtonApp
          title="Enviar mensaje"
          action={() => alert("Soy un mensaje")}
          background="bg-red-600"
          bghover="hover:bg-red-800"
        />
        <CardApp
          logo={logo}
          texto="EcoWave Energy es una empresa innovadora dedicada a transformar el
          poder del océano en energía limpia y sostenible. Combinando tecnología
          de vanguardia con un compromiso profundo por el medio ambiente,
          EcoWave impulsa soluciones renovables que protegen el planeta y
          promueven un futuro energético más responsable."
          enlace="https://rollingcodeschool.com"
        />
      </div>
      <div className=" flex flex-col items-center my-10 text-center md:text-left">
        <h3 className="text-4xl mb-4">Galería de imágenes</h3>
        <GalleryApp />
      </div>
    </>
  );
};

export default App;
