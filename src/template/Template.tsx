

interface Children{
    children: React.ReactNode;    
}

export const Template = ({children}: Children) => {
  return (
    <section className="bg-morado font-roboto mx-auto max-w-screen-3xl my-0 overflow-hidden px-4 space-y-10 text-rosa">
        {children}
    </section>
  )
}
