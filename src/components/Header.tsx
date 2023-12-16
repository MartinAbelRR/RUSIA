export const Header = () => {
  return (
    <header>
      <nav className="font-bold gap-5 grid grid-flow-row place-content-center py-4 md:grid-flow-col md:place-content-end">
        <a href="#" className="pr-4 text-2xl">
          Inicio
        </a>
        <a href="#" className="pr-4 text-2xl">
          Contacto
        </a>
        <a href="#" className="pr-4 text-2xl">
          Requisitos
        </a>
      </nav>
    </header>
  );
};
