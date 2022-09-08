export const HeaderNav = () => {

    const links = [{ id: 10, href: "#acerca", text: "ACERCA"},
                  { id: 20, href: "#servicios", text: "SERVICIOS"},
                  { id: 30, href: "#portfolio", text: "PORTFOLIO"},
                  { id: 40, href: "#contacto", text: "CONTACTO"}]

  return (
    <nav className="principal">
       <ul>
         {links.map(link =>
            <a key = {link.id} href={link.href}>{link.text}</a>)}
    
       </ul>
     </nav>
  )
}