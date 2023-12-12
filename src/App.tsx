import { Template } from "./template/Template";


export const App = () => {
  return (
      
        <Template>
          <nav className="grid place-content-center h-36">
            <div className="flex flex-col gap-3">
              <a href="#" className="">Inicio</a>
              <a href="#" className="">Inicio</a>
              <a href="#" className="">Inicio</a>
            </div>
          </nav>

          <section className="text-xl py-12">
            <h1>Estudia y Vive en Rusia</h1>

            <div className="text-white  font-normal">
              <p>Descubre la asobrosa arquitectura de San Pertersburgo, los majestuosos paisajes de Siberia, y la rica cultura de Móscu con la ayuda de nuestro asesoramiento especializado envisas para estudaintes.</p>
            </div>
          </section>
        </Template>
  )
}
