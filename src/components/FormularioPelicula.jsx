import React from "react"
import { useState } from "react"


// este es el formulario para agregar peliculas a la lista recibe agregarPelicula que es la funcion que viene de App.jsx para guardar en firestore peliculaOMDB es la pelicula que buscamos en la api, y setPeliculaOMDB para limpiarla despues

function FormularioPelicula({ agregarPelicula, peliculaOMDB, setPeliculaOMDB }) {

  // aca van los estados de cada campo del formulario, cada input tiene su estado
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estado, setEstado] = useState("Por ver")
    const [poster, setPoster] = useState("")


  // esta funcion se ejecuta cuando el usuario hace click en guardar el e.preventDefault() es para que no se recargue la pagina
  const handleSubmit = (e) => {
    e.preventDefault()

    // aca armamos el objeto con todos los datos que escribio el usuario en el formulario
    const nuevaPelicula = {
      titulo,
      descripcion,
      estado,
      poster
    }

    // llamamos a la funcion que viene del App para que guarde en firestore
    agregarPelicula(nuevaPelicula)

    // limpiamos todo despues de guardar para que el form quede vacio
    setTitulo("")
    setDescripcion("")
    setEstado("Por ver")
    setPoster("")
  }

  return (
    <div className="formulario-pelicula">

      <h3>Agregar pelicula</h3>

      <input type="text" placeholder="Titulo"
        value={titulo}

 onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea placeholder="Descripcion de la pelicula" value={descripcion}
       onChange={(e) => setDescripcion(e.target.value)}
      />

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>

        <option value="Por ver">Por ver</option>
        
        <option value="Vista">Vista</option>
      </select>

      <button onClick={handleSubmit}>Guardar</button>
    </div>
  )
}

export default FormularioPelicula
