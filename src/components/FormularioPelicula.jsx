import React from "react"
import { useState } from "react"


// formulario para agregar peliculas

function FormularioPelicula() {

  // estados para los campos del formulario
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estado, setEstado] = useState("Por ver")
    const [poster, setPoster] = useState("")


  return (
    <div className="formulario-pelicula">

      <h3>Agregar pelicula</h3>

      <input type="text" placeholder="Titulo"
        value={titulo}

 onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea placeholder="Descripcion de la pelicula" value={descripcion}
       onChange={(e) => setDescripcion(e.target.vaule)}
      />

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>

        <option value="Por ver">Por ver</option>
        
        <option value="Vista">Vista</option>
      </select>

      <button>Guardar</button>
    </div>
  )
}

export default FormularioPelicula
