import { useState } from "react";

export const Header = () => {
  const [desplazar, setDesplazar] = useState(false);

  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Rusia Zerranozky</h1>

        <div
          className={`w-6 h-6 ${
            !desplazar ? "bg-menu-open" : "bg-menu-close"
          } bg-no-repeat bg-center relative cursor-pointer transition-all z-10 md:hidden`}
          onClick={() => setDesplazar(!desplazar)}
        ></div>

        <section
          className={`fixed inset-0 bg-black/60 ${
            !desplazar ? "opacity-0 pointer-events-none" : ""
          } transition-all md:pointer-events-auto md:relative md:bg-transparent md:opacity-100`}
        >
          <ul className="w-3/4 bg-white h-full font-bold text-2xl text-rosado-opaco absolute right-0 top-0 grid content-center gap-4 pl-6 md:grid-flow-col md:w-max md:pl-0 md:gap-8">
            <li>
              <a href="#" className="hover:text-solfRed">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-solfRed">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-solfRed">
                Requisitos
              </a>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};
