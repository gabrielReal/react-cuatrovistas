import { Circle } from "./Circle";



export const Porque = () => {

const porques = [
    {
        title: "Diseño UX",
        text: "Pensamos, proyectamos y producimos nuestras propuestas aplicando metodologías ágiles y centrando el desarrollo en la experiencia de potenciales usuarios.",
    },

    {
        title: "Desarrollos a medida",
        text: "Nos adaptamos a las necesidades y requerimientos de cada cliente, considerando siempre la posibilidad de escalar el producto a futuro.",
    },

    {
        title: "Adaptabilidad",
        text: "Diseñamos nuestros sitios web para que sean adaptables a todos los dispositivos de navegación.",
    },

    {
        title: "Usabilidad",
        text: "Buscamos que el flujo de navegación e interacción resulte accesible e intuitivo para el usuario, optimizando el tiempo y los pasos para concretar cualquier tarea o búsqueda.",
    }
];


  return (
    <>
        {porques.map(porque =>
            <article className="servicio sumamos-article" data-aos="fade-up" data-aos-duration="2000"> 
                <Circle/>
                <div className="servicio-texto">
                <h1>{porque.title}</h1>
                <p>{porque.text}</p>
                </div>
            </article>)}
    </>
  )
}
