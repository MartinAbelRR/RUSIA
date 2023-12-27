import figure_1 from "../assets/figure_1.jpg";

export const Header = () => {

  return (
    <header>
      <nav
        className="flex h-20 items-center justify-between"
      >
        <h1 className="font-bold italic text-4xl">Zerranosky</h1>


        <input id="menu" type="checkbox" className="hidden peer/menu" />
        <label
          htmlFor="menu"
          className="bg-center bg-cover bg-menu-open bg-rosa cursor-pointer h-10 peer-checked/menu:bg-menu-close rounded-lg transition-all w-10 z-40 md:hidden"
        ></label>

        <ul
          className="auto-rows-max bg-white clip-circle-0 duration-500 fixed font-bold gap-6 grid inset-0 peer-checked/menu:clip-circle-full place-content-center place-items-center px-[5%] text-2xl transition-[clip-path] md:bg-transparent md:clip-circle-full md:grid-flow-col md:p-0 md:relative"
        >
          <li>
            <a href="#inicio" className="duration-[1000ms] hover:text-morado md:hover:text-white peer-checked/menu:clip-circle-0">Inicio</a>
          </li>

          <li>
            <a href="#requisitos" className="duration-[1000ms] hover:text-morado md:hover:text-white">Requisitos</a>
          </li>

          <li>
            <a href="#contacto" className="duration-[1000ms] hover:text-morado md:hover:text-white">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="grid grid-flow-row pb-16 pt-10 space-y-8 md:grid-adaptable">
        <figure className="flex justify-center">
          <img
            src={figure_1}
            alt="#"
            className="w-2/4 min-w-[276px] rounded-e-xl md:w-3/5"
          />
        </figure>

        <div className="flex flex-col justify-center space-y-2 text-xl">
          <h1 className="font-bold text-3xl md:text-5xl">
            Estudia y Vive en Rusia
          </h1>
          <p className="text-lila md:text-2xl">
            Descubre la asombrosa arquitectura de San Petersburgo, los
            majestuosos paisajes de Siberia, y la rica cultura de Moscú con la
            ayuda de nuestro asesoramiento especializado en visas para
            estudiantes.
          </p>
        </div>
      </section>
    </header>
  );
};
