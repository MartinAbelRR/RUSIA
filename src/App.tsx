import { Template } from "./template/Template";
import { Header } from "./components/Header";
import figure_1 from './assets/figure_1.jpg';
import figure_2 from './assets/figure_2.jpg';
import figure_3 from './assets/figure_3.jpg';
import figure_4 from './assets/figure_4.jpg';
import figure_5 from './assets/figure_5.jpg';
import figure_6 from './assets/figure_6.jpg';
import figure_7 from './assets/figure_7.jpg';
import figure_8 from './assets/figure_8.jpg';

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

            <section className="min-h-[90vh] space-y-8">
              <h1 className="font-bold text-3xl md:mb-20 md:text-5xl">Proceso de Solicitud de Visa</h1>
              
              <div className="grid grid-cols-[1fr,60px,1fr] grid-rows-4 px-2 md:grid-cols-4 md:grid-rows-[1fr,60px,1fr]">                
                {/* Izquierda */}
                <article className="flex flex-row-reverse md:block md:row-start-3">
                  <div className="flex flex-col font-bold gap-3 text-2xl">
                    <div className="flex flex-row-reverse items-center justify-center left-12 relative md:flex-col md:left-0 md:-top-20">
                      <span className="bg-morado-oscuro px-4 py-2 relative rounded-[4px]">1</span>
                      <div className="border-rosado-opaco border-t-4 w-6 relative md:border-r-4 md:h-20 md:w-0"></div>
                    </div>                    
                  </div>

                  <div className="relative text-xl md:text-center md:-top-14">
                        <h1 className="font-bold py-2 text-2xl md:text-3xl"> Solicitud</h1>
                        <p className="text-lila md:text-center">Entrega de documentos escaneados, pasaporte y certificados de estudios en PDF.</p>                  
                  </div>
                </article>    

                <article className="flex flex-row-reverse row-start-3 md:block md:col-start-3">
                  <div className="flex flex-col font-bold gap-3 text-2xl">
                    <div className="flex flex-row-reverse items-center justify-center left-12 relative md:flex-col md:left-0 md:-top-20">
                      <span className="bg-morado-oscuro px-4 py-2 relative rounded-[4px]">3</span>
                      <div className="border-rosado-opaco border-t-4 relative w-6 md:w-0 md:border-r-4 md:h-20"></div>
                    </div>                    
                  </div>

                  <div className="relative text-xl md:text-center md:-top-14">
                        <h1 className="font-bold py-2 text-2xl md:text-3xl"> Tramite Carta de Invitación</h1>
                        <p className="text-lila md:text-center">Se deberá presentar una serie de documentos para poder realizar el trámite para poder realizar el trámite debido y esperar hasta 40 días hábiles.</p>                  
                  </div>
                </article>                

                {/* Linea central */}
                <div className="border-r-4 border-rosado-opaco col-start-2  row-span-4 w-2/4  md:row-auto md:col-start-1 md:row-start-2 md:border-0 md:border-t-4 md:col-span-4 md:w-full">
                </div>

                {/* Derecha */}
                <article className="col-start-3 flex row-start-2 md:flex-col-reverse md:row-start-1 md:col-start-2">
                  <div className="flex flex-col font-bold gap-3 text-2xl">
                    <div className="flex items-center justify-center -left-12 relative md:flex-col-reverse md:left-0 md:top-8">
                      <span className="bg-morado-oscuro px-4 py-2 relative rounded-[4px]">2</span>
                      <div className="border-rosado-opaco border-t-4 relative w-6  md:w-0 md:border-r-4 md:h-20"></div>
                    </div>                    
                  </div>

                  <div className="relative text-xl md:text-center md:-top-2">
                        <h1 className="font-bold py-2 text-2xl md:text-3xl">Pago de Tarifa</h1>
                        <p className="text-lila md:text-center">Se deberá presentar una de serie de documentos para poder realizar el trámite debido y espera hasta 40 días hábiles.</p>                  
                  </div>
                </article> 
                
                <article className="col-start-3 flex row-start-4 md:flex-col-reverse md:row-start-1 md:col-start-4">
                  <div className="flex flex-col font-bold gap-3 text-2xl">
                    <div className="flex items-center justify-center -left-12 relative md:flex-col-reverse md:left-0 md:top-8">
                      <span className="bg-morado-oscuro px-4 py-2 relative rounded-[4px]">4</span>
                      <div className="border-rosado-opaco border-t-4 relative w-6  md:w-0 md:border-r-4 md:h-20"></div>
                    </div>                    
                  </div>

                  <div className="relative text-xl md:text-center md:-top-2">
                        <h1 className="font-bold py-2 text-2xl md:text-3xl">Entrevista Consular</h1>
                        <p className="text-lila md:text-center">Se deberá presentar una de serie de documentos para poder realizar el trámite debido y espera hasta 40 días hábiles.</p>                  
                  </div>
                </article> 
              </div>
            </section>

            <section className="space-y-8">
              <h1 className="font-bold text-3xl md:text-center md:text-5xl">¿Cómo Prepararme para Viajar a Rusia?</h1>
              <div className="flex flex-col gap-4 items-center justify-evenly text-xl md:flex-row md:h-[700px]">
                  <article className="max-w-xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">1</span>
                      <h2 className="py-2"> Programa tu Visa</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Te ayudaremos a programar tu visa para que tengas una fecha aproximada.</p>                    
                  </article>
                  <article className="max-w-xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">2</span>
                      <h2 className="py-2"> Compra tu Pasaje</h2>
                    </div>
                    <p className="text-lila md:text-2xl">El pasaje deberá ser comprado con 2 meses de anticipación como mínimo para poder adquirilo a un muy buen precio.</p>                    
                  </article>
                  <article className="max-w-xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">3</span>
                      <h2 className="py-2"> Alista tu Maleta</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Te aconsejaremos con las cosas que deberás llevar para que todo sea perfecto.</p>                    
                  </article>
              </div>
            </section>

            <section className="space-y-8">
             <h1 className="font-bold text-3xl md:text-5xl">Mantener su Visa y Cumplir con los Requerimientos de Inmigración</h1>

             <div className="gap-5 grid py-4 text-xl md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-rows-2 md:h-[800px]">
                  <article className="max-w-xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">1</span>
                      <h2 className="py-2"> Renovación</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Asegurarse de renovar su visa antes de que expire para evitar problemas al salir de Rusia.</p>                    
                  </article>
                  <article className="max-w-xl space-y-4 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">2</span>
                      <h2 className="py-2"> Cumplimiento de Requerimientos de Inmigración</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Mantenga un registro preciso de su estadia en Rusia y asegúrase de cumplir con todos los requerimientos de inmigración y de su institución educativa para evitar problemas de inmigración y académicos.</p>                    
                  </article>
                  <article className="max-w-xl space-y-4 md:row-start-2 md:space-y-8">
                    <div className="flex font-bold items-start text-2xl md:text-3xl">
                      <span className="bg-white/10 mr-2 px-4 py-2 rounded-[5px]">3</span>
                      <h2 className="py-2"> Soporte Continuo</h2>
                    </div>
                    <p className="text-lila md:text-2xl">Estamos disponibles para ayudarlo en cualquier momento durante su estadía en Rusia, incluyendo la renovación de su visa.</p>                    
                  </article>

                  <figure className="md:col-start-3 md:row-span-2">
                    <img src={figure_5} alt="#" className=" hidden h-full rounded-md w-full md:block" />
                  </figure>
              </div>
            </section>

            <section className="min-h-[90vh] space-y-8">
              <h1 className="font-bold text-3xl md:text-5xl">Mantener su Visa y Cumplir con los Requerimientos de Inmigración</h1>

              <div className="flex flex-col gap-4 items-center justify-evenly text-xl md:flex-row md:h-[800px]">
                  <article className="flex flex-col max-w-2xl space-y-2 md:space-y-4">                 
                    <h2 className="font-bold mt-4 text-2xl md:text-3xl">Clases de Ruso Adicional</h2>
                    <p className="text-lila md:text-2xl">Ofrecemos clases de ruso personalizadas para ayudarlo a adaptarse a la vida en Rusia.</p>
                    <img src={figure_6} alt="#" className="block h-[300px] mx-auto rounded-lg w-[400px] md:-order-1"/>
                  </article>
                  <article className="flex flex-col max-w-2xl space-y-2 md:space-y-4">                 
                    <h2 className="font-bold mt-4 text-2xl md:text-3xl">Exploración de Restaurantes</h2>
                    <p className="text-lila md:text-2xl">Le ofrecemos una guía personalizada de los mejores restaurantes y comidas en cada ciudad de su interés en Rusia.</p>
                    <img src={figure_7} alt="#" className="block h-[300px] mx-auto rounded-lg w-[400px] md:-order-1"/>
                  </article>
                  <article className="flex flex-col max-w-2xl space-y-2 md:space-y-4">                 
                    <h2 className="font-bold mt-4 text-2xl md:text-3xl">Excursiones Culturales</h2>
                    <p className="text-lila md:text-2xl">Organizamos recorridos culturales y eventos especiales para ayudarte a experimentar todo lo que Rusia tiene para ofrecer.</p>
                    <img src={figure_8} alt="#" className="block h-[300px] mx-auto rounded-lg w-[400px] md:-order-1"/>
                  </article>
              </div>
            </section>
          </main>

          <footer className="h-72 flex justify-center items-center py-8">
            <div className="bg-morado-oscuro/50 px-4 py-6 rounded-xl">
              <h2 className="font-bold text-2xl md:text-4xl">&copy; <a href="https://www.instagram.com/zerranoskyrusia/">Zerranosky</a></h2>
            </div>
          </footer>

        </Template>
  )
}
