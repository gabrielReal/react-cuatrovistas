import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./Modal";
import projectsDB from "./PortfolioDB";


  
  function Modals({ client, type, web, link, description, description2, description3, description4, description5, description6, image, slide01, slide02 }) {
    
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
            <Carousel fade>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide01}
                  alt={description}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide02}
                  alt={description}
                />
              </Carousel.Item>
              
            </Carousel>
            </article>
            <article className="fotos-textos">
                <h2>{client}</h2>
                <h1>{type}</h1>	
                    <nav>
                        <ul>
                            <li><a href={link} target="_blank" rel="noreferrer">{web}</a></li>
                            <li>{description}</li>
                            <li>{description2}</li>
                            <li>{description3}</li>
                            <li>{description4}</li>
                            <li>{description5}</li>
                            <li>{description6}</li>
                        </ul>
                    </nav>
                    <a href="#contacto" className="btnContacto">CONSULTANOS</a>
                    
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
            description3: el.description3,
            description4: el.description4,
            description5: el.description5,
            description6: el.description6,
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
            <Modals key={el.client} client={el.client} type={el.type} web={el.web} link={el.link} description={el.description} description2={el.description2} description3={el.description3} description4={el.description4} description5={el.description5} description6={el.description6} image={el.image} slide01={el.slide01} slide02={el.slide02} />
          ))
        )}
      </>
    );
  }




