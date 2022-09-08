import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import avtboton from "../assets/portfolio/avt-boton.jpg";
import gamboaboton from "../assets/portfolio/BodegaGamboa_boton.jpg";
import signature from "../assets/portfolio/signature_boton.jpg";
import tecno from "../assets/portfolio/tecnobridge-boton.jpg";
import castro from "../assets/portfolio/castro-web-boton.jpg";
import avt01 from "../assets/portfolio/avt-01.jpg";
import avt02 from "../assets/portfolio/avt-02.jpg";


const projectsDB = [
    {
      client: "Argentina Virtual Tours",
      type: "Landing Page",
      web: "www.argentinavirtualtours.com",
      link: "http://argentinavirtualtours.com/",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: avtboton,
      slide01: avt01,
      slide02: avt02
    },
    {
      client: "BodegaGamboa",
      type: "Landing Page",
      web: "www.bodegagamboa.com.ar",
      link: "http://bodegagamboa.com.ar/",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: gamboaboton,
      slide01: "avt-01.jpg",
      slide02: "avt-02.jpg"
    },
    {
      client: "SignatureDMC",
      type: "Sitio Web",
      web: "www.signaturedmc.com",
      link: "http://www.signaturedmc.com",
      description: "Diseño Web",
      description2: "HTML, CSS3 y Javascript",
      image: signature,
      slide01: "avt-01.jpg",
      slide02: "avt-02.jpg"
    },
    {
      client: "Tecnobridge",
      type: "Sitio Web",
      web: "www.tecnobridge.com.ar",
      link: "https://www.tecnobridge.com.ar",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: tecno,
      slide01: "avt-01.jpg",
      slide02: "avt-02.jpg"
    },
    {
      client: "Castro & Asociados | Broker de Seguros",
      type: "Webpage",
      web: "www.organizacioncastro.com.ar",
      link: "https://www.organizacioncastro.com.ar/",
      description: "Diseño Website",
      description2: "Desarrollo HTML, CSS3 y Javascript",
      image: castro,
      slide01: "avt-01.jpg",
      slide02: "avt-02.jpg"
    }
  ];

  
  

  
  function Modals({ client, type, web, link, description, description2, image, slide01, slide02 }) {
    
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
    <>  
             
        <article className="PortfolioArticle">
            <div className="cuadrado"></div>
            <figure>
            <figcaption className="PortfoliovViewMore" onClick={openModal}>+</figcaption>
                <img src={image} alt={type} title={type} />
            </figure>
        </article>

        <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <article className="fotos">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                      <img src={slide01} alt={client} style= {{width:'100%'}} />
                    </div>
                    <div className="mySlides fade">
                      <img src={slide02} alt={client} style= {{width:'100%'}} />
                    </div>
                </div>
            </article>
            <article className="fotos-textos">
                <h2>{client}</h2>
                <h1>{type}</h1>	
                    <nav>
                        <ul>
                            <li><a href={link} target="_blank" rel="noreferrer">{web}</a></li>
                            <li>{description}</li>
                            <li>{description2}</li>
                        </ul>
                    </nav>
                    
            </article>
   
      </Modal>
      
    </>
  )};

  export default function AjaxHooks() {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const getProjects = () => {
  
        projectsDB.forEach((el) => {
  
          let project = {
            client: el.client,
            type: el.type,
            web: el.web,
            link: el.link,
            description: el.description,
            description2: el.description2,
            image: el.image,
            slide01: el.slide01,
            slide02: el.slide02,
          };
  
          setProjects((projects) => [...projects, project]);
        });
      };
  
      getProjects();
    }, []);
  
    return (
      <>
        {projects.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          projects.map((el) => (
            <Modals key={el.client} client={el.client} type={el.type} web={el.web} link={el.link} description={el.description} description2={el.description2} image={el.image} slide01={el.slide01} slide02={el.slide0} />
          ))
        )}
      </>
    );
  }




