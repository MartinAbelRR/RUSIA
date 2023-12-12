

interface Children{
    children: React.ReactNode;
}

export const Template = ({children}: Children) => {
  return (
    <section className="font-roboto font-bold text-rosa max text-3xl bg-morado-oscuro max-w-screen-xl my-0 mx-auto py-6">
        {children}
    </section>
  )
}
