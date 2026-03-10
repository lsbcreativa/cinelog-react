import React from "react"
import { useState, useEffect } from "react"


// este es el formulario para agregar peliculas a la lista recibe agregarPelicula que es la funcion que viene de App.jsx para guardar en firestore peliculaOMDB es la pelicula que buscamos en la api, y setPeliculaOMDB para limpiarla despues

function FormularioPelicula({ agregarPelicula, actualizarPelicula, peliculaEditar, setPeliculaEditar, peliculaOMDB, setPeliculaOMDB }) {

  // aca van los estados de cada campo del formulario, cada input tiene su estado
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estado, setEstado] = useState("Por ver")
    const [poster, setPoster] = useState("")


  // este useEffect es para cuando el usuario busca una pelicula en OMDB y le da agregar se llena el formulario solo con los datos que trajo de la api
  useEffect(() => {
    if (peliculaOMDB) {
      setTitulo(peliculaOMDB.Title)
      setDescripcion(peliculaOMDB.Plot)
      setPoster(peliculaOMDB.Poster)
    }
  }, [peliculaOMDB])

  // este es para cuando el usuario quiere editar una pelicula que ya esta en la lista le pone los datos en el formulario para que los pueda cambiar
  useEffect(() => {
    if (peliculaEditar) {
      setTitulo(peliculaEditar.titulo)
      setDescripcion(peliculaEditar.descripcion)
      setEstado(peliculaEditar.estado)
      setPoster(peliculaEditar.poster)
    }
  }, [peliculaEditar])

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

    // si estamos editando llamamos a actualizarPelicula, si no a agregarPelicula
    if (peliculaEditar) {
      actualizarPelicula(peliculaEditar.id, nuevaPelicula)
    } else {
      agregarPelicula(nuevaPelicula)
    }

    // limpiamos la pelicula de OMDB si habia una
    if (peliculaOMDB) setPeliculaOMDB(null)

    // limpiamos todo despues de guardar para que el form quede vacio
    setTitulo("")
    setDescripcion("")
    setEstado("Por ver")
    setPoster("")
  }

  return (
    <div className="formulario-pelicula">

      <h3>{ peliculaEditar ? "Editar pelicula" : "Agregar pelicula"}</h3>

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

      <button onClick={handleSubmit}>{ peliculaEditar ? "Actualizar" : "Guardar"}</button>
    </div>
  )
}

export default FormularioPelicula
