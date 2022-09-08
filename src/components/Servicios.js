import React from 'react'
import { Servicio } from './Servicio'

export const Servicios = () => {
  return (
    <section className="serviciosGris" id="servicios">
        <h1 className="titulo" data-aos="fade-up" data-aos-duration="2000">SERVICIOS</h1>
        <section className="servicios viewport">
            <Servicio />
        </section>
    </section>
  )
}
