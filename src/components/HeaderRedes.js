import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const HeaderRedes = () => {

    const links = [{ id: 11, href: "https://www.facebook.com/cuatrovistasestudio/", alt:"facebook", text:<FontAwesomeIcon icon={faFacebookF}/>},
                  { id: 12, href: "https://www.linkedin.com/company/cuatrovistas/", alt:"linkedin", text:<FontAwesomeIcon icon={faLinkedinIn}/> },
                  { id: 13, href: "https://www.instagram.com/cuatrovistas_estudio/", alt:"instagram", text:<FontAwesomeIcon icon={faInstagram}/>}]

  return (
    <nav className="socialNav">
       <ul>
         {links.map(link =>
            <li><a key = {link.id} href={link.href} alt={link.alt}>{link.text}</a></li>)}
    
       </ul>
     </nav>
  )
}