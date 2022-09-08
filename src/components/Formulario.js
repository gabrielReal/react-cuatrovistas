import React, { useState } from "react";
/*
export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                />

            <label htmlFor="telefono">Teléfono</label>
            <input 
                type="text" 
                id="telefono" 
                name="telefono" 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                />

            <label htmlFor="mail">E-mail</label>
            <input 
                type="mail" 
                id="mail" 
                name="mail" 
                value={mail}
                onChange={(e) => setMail(e.target.value)} 
                />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
                id="mensaje" 
                name="mensaje" 
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)} 
                />

            <input type="submit" />
        </form>
        </>

    );
}*/

export default function Formulario() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.name,
            [e.target.telefono]:e.target.telefono,
            [e.target.mail]:e.target.mail,
            [e.target.mensaje]:e.target.mensaje,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return (
        <section className="container-formulario">
            <h1 className="titulo">CONTACTO</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre" 
                value={form.nombre}
                onChange={handleChange} 
                />

            <label htmlFor="telefono">Teléfono</label>
            <input 
                type="text" 
                id="telefono" 
                name="telefono" 
                value={form.telefono}
                onChange={handleChange}
                />

            <label htmlFor="mail">E-mail</label>
            <input 
                type="mail" 
                id="mail" 
                name="mail" 
                value={form.mail}
                onChange={handleChange} 
                />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
                id="mensaje" 
                name="mensaje" 
                value={form.mensaje}
                onChange={handleChange} 
                />

            <input type="submit" />
        </form>
        </section>

    );
}