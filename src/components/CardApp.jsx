const CardApp = ({ logo, texto, enlace }) => {
  return (
    <article className="bg-stone-50 max-w-80 shadow-md p-2">
      <header className="flex justify-center">
        <img src={logo} alt="logo" className="w-50" />
      </header>
      <section>
        <p className="text-justify">{texto}</p>
      </section>
      <footer className="my-2 flex justify-end">
        <a
          className="text-green-700 cursor-pointer"
          href={enlace}
          target="_blank"
        >
          Ir a la web
        </a>
      </footer>
    </article>
  );
};

export default CardApp;
