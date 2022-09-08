import { useForm } from "../hooks/useForm";

const initialForm = {}

const validationsForm = (form) => {}


export const ContactForm = () => {
    const {
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    } = useForm(initialForm)
  return (
    <section className="container-formulario">
        <h1 className="titulo">CONTACTO</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
            <input 
                type="text" 
                name="name"
                id="nombre"
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.name} 
                required 
            />
            <label htmlFor="mail">E-mail</label>
            <input 
                type="email" 
                name="email"
                id="email"
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.email} 
                required 
            />
            <label htmlFor="telefono">Teléfono</label>
            <input 
                type="text" 
                name="phone"
                id="telefono"
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.phone} 
                required 
            />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
                name="comments"
                id="mensaje"
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.comments} 
                required>   
            </textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </section>
  )
}
