import React, { useEffect, useState } from 'react';

  export function Acerca() {
   
    const [visible, setVisible] = useState(false);

    useEffect(() => {       

    const handleScroll = e => {
        let scrollingTop = e.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollingTop/3 - 60);
      
        setVisible({
          transform: itemTranslate
        });  
      
    };
        
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, [visible]);
  
    return ( 
      <>
      { visible &&
        <section className="somos viewport" id="acerca" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="titulo">ACERCA</h1>
            <p><span>Cuatrovistas</span> es un estudio de diseño y comunicación visual, compuesto por un equipo de profesionales con amplia experiencia en la creación de piezas gráficas y el desarrollo de sitios y plataformas web centradas en el usuario.<br/>
            Cada proyecto que afrontamos lo hacemos con total compromiso y dedicación, buscando la mejor solución para cada requerimiento.<br/>
            Trabajamos conjuntamente en un clima de máximo entusiasmo, disfrutando con pasión de cada nuevo desafío.
            Nos exigimos cada día por superarnos, quedar conformes con nuestra labor y alcanzar nuestro mayor éxito que es la satisfacción de quien confíe en nosotros.</p>
          </section> }
      </>
    )
}

    
