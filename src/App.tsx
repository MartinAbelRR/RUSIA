import { Template } from "./template/Template";
import { Header } from "./components/Header";
import figure_1 from './assets/figure_1.jpg';
import figure_2 from './assets/figure_2.jpg';
import figure_3 from './assets/figure_3.jpg';
import figure_4 from './assets/figure_4.jpg';

export const App = () => {
  return (      
        <Template>
          <Header />
          
          <section className="grid grid-flow-row mt-6 space-y-8 md:grid-flow-col">
            <figure className="flex justify-center">
              <img src={figure_1} alt="#" className="w-2/4 min-w-[276px] rounded-e-xl md:w-3/5"/>
            </figure>

            <div className="flex flex-col justify-center max-w-3xl pt-6 space-y-4 text-xl">
              <h1 className="font-bold text-3xl md:text-5xl">Estudia y Vive en Rusia</h1>
              <p className="text-lila md:text-2xl">Descubre la asobrosa arquitectura de San Pertersburgo, los majestuosos paisajes de Siberia, y la rica cultura de Moscú con la ayuda de nuestro asesoramiento especializado en visas para estudiantes.</p>
            </div>
          </section>
          
          <main className="space-y-8">
            <section className="flex items-center justify-center min-h-[90vh]">
              <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:mt-20">
                <article className="bg-white/10 max-w-lg px-4 py-6 rounded-lg space-y-8 text-xl md:text-2xl">
                  <h1 className="font-bold text-3xl md:text-5xl">Experiencia</h1>
                  <p className="text-lila md:text-2xl">Cuento con 4 años de experiencia en la solicitud de visas y he trabajado con más de 25 universidades, estoy comprometido a hacer del proceso de solicitar la visa de   estudiante en Rusia lo más fácil y fluido posible.</p>
                </article>                          
                <article className="bg-white/10 max-w-lg px-4 py-6 rounded-lg space-y-8 text-xl md:text-2xl">
                  <h1 className="font-bold text-3xl md:text-5xl">Confianza</h1>
                  <p className="text-lila md:text-2xl">Trabajos directamente con las autoridades rusas y garantizamos una tasa de éxito del 100% en la obtención de visas de estudiante para nuestros clientes.</p>
                  <img src={figure_2} alt="#" className="block h-[300px] mx-auto rounded-t-2xl w-[300px]"/>
                </article>                          
                <article className="bg-white/10 max-w-lg px-4 py-6 rounded-lg space-y-8 text-xl md:text-2xl">
                  <h1 className="font-bold text-3xl md:text-5xl">Servicio al Cliente</h1>
                  <p className="text-lila md:text-2xl">Ofrecemos soporte personalizado en todo momento y estamos disponibles para responder cualquier pregunta o inquietud que pueda tener durante el proceso de solicitud de visa y su estadía en Rusia.</p>
                </article>                          
              </div>
            </section>

            <section className="min-h-[90vh] space-y-4">
              <h1 className="font-bold text-3xl md:mb-20 md:text-5xl">Requisitos de Visa para Estudiantes en Rusia</h1>
                <div className="flex flex-col gap-4 items-center justify-evenly text-xl md:flex-row">
                  <article className="max-w-2xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">1</span>
                      <h2 className="py-2"> Pasaporte Vigente</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Documento indispensable y deberá tener vigencia por un periodo mínimo de 18 meses al momento de solicitar la visa.</p>
                    <img src={figure_3} alt="#" className="block mx-auto rounded-lg w-[400px]"/>
                  </article>
                  <article className="max-w-2xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">2</span>
                      <h2 className="py-2"> Certificado de Estudios Escolar o Superior</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Documento apostillado por el Ministerio de Relaciones Exteriores de su país de origen.</p>
                    <img src={figure_4} alt="#" className="block mx-auto rounded-lg w-[400px]"/>
                  </article>
                </div>
            </section>

            
          </main>

        </Template>
  )
}
