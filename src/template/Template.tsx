interface Children{
    children: React.ReactNode;    
}

export const Template = ({children}: Children) => {
  return (
    <section className="bg-morado font-roboto text-rosa">
      <div className="mx-auto max-w-screen-2xl overflow-hidden w-[90%]">
        {children}
      </div>
    </section>
  )
}
