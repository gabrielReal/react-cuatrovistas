import { Acerca } from "./components/Acerca";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Servicios } from "./components/Servicios";
import { ScrollTopButton } from "./components/ScrollTopButton";
import Formulario from "./components/Formulario";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sumamos } from "./components/Sumamos";
import { ContactForm } from "./components/ContactForm";
AOS.init();

function App() {
  return (
    <>
      <ScrollTopButton />
      <Header />
      <Acerca />
      <Servicios />
      <Portfolio />
      <Sumamos />
      <ContactForm />
    </>
      
  );
}

export default App;
