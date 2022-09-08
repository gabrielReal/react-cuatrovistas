
import diseno from "../assets/diseno.svg";
import disenoweb from "../assets/disenoweb-color.svg";
import marketing from "../assets/marketing.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';



export const Servicio = () => {

const servicios = [
    {
        image: diseno,
        title: "Diseño Gráfico",
        text: "Desarrollamos cualquier tipo de pieza gráfica, adaptándonos a la necesidad de cada requerimiento.",
        list: [
            {id: "a", item: "Identidad Corporativa"},
            {id: "b", item: "Branding"},
            {id: "c", item: "Folletos"},
            {id: "d", item: "Brochures"},
            {id: "e", item: "Catálogos"},
            {id: "f", item: "Memorias y Balances"}
        ]
    },

    {
        image: disenoweb,
        title: "Diseño Web",
        text: "Diseño de sitios web personalizados y adaptables a todos los dispositivos de navegación.",
        list: [
            {id: "a", item: "Diseño UX/UI"},
            {id: "b", item: "Responsive Web Design"},
            {id: "c", item: "Landing Pages"},
            {id: "d", item: "Desarrollo de sitios robustos"},
            {id: "e", item: "Plataformas de e-commerce"},
            {id: "f", item: "Banners"}
        ]
    },

    {
        image: marketing,
        title: "Marketing Digital",
        text: "Desarrollamos campañas atractivas y eficaces para colaborar con el éxito de nuestros clientes.",
        list: [
            {id: "a", item: "Generación de Contenidos"},
            {id: "b", item: "Social Media"},
            {id: "c", item: "Motion Graphics"},
            {id: "d", item: "Fotografía de Producto"},
            {id: "e", item: "Mailings"},
            {id: "f", item: "Banners"}
        ]
    },
]





  return (
    <>

        {servicios.map(servicio =>
            <article className="servicio" data-aos="fade-up" data-aos-duration="2000"> 
                <img src={servicio.image} alt={`icono ${servicio.title}`} data-aos="zoom-in" data-aos-duration="2000"/>
                <div className="servicio-texto">
                <h1>{servicio.title}</h1>
                <p>{servicio.text}</p>
                <FontAwesomeIcon icon={faAngleDown} className="servicioIcon" />
                <ul>
                    {servicio.list.map(item =>
                        <li key={item.id}>{item.item}</li>)}                      
                </ul>
                </div>
            </article>)}
    </>
  )
}
