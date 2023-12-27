import { Template } from "./template/Template";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer"

export const App = () => {
  return (      
        <Template>
          <Header />
          
          <Main />
          
          <Footer />
        </Template>
  )
}
