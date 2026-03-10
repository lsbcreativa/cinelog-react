import React from "react"
import { useState, useEffect } from "react"


// este formulario ahora solo se usa para editar peliculas
// aparece cuando el usuario le da click a editar en una tarjeta

function FormularioPelicula({ actualizarPelicula, peliculaEditar, setPeliculaEditar }) {

  // aca van los estados de cada campo del formulario, cada input tiene su estado
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estado, setEstado] = useState("Por ver")
    const [poster, setPoster] = useState("")


  // cuando el usuario quiere editar una pelicula le pone los datos en el formulario para que los pueda cambiar
  useEffect(() => {
    if (peliculaEditar) {
      setTitulo(peliculaEditar.titulo)
      setDescripcion(peliculaEditar.descripcion)
      setEstado(peliculaEditar.estado)
      setPoster(peliculaEditar.poster)
    }
  }, [peliculaEditar])

  // esta funcion se ejecuta cuando el usuario hace click en actualizar
  const handleSubmit = (e) => {
    e.preventDefault()

    // armamos el objeto con los datos editados
    const peliculaActualizada = {
      titulo,
      descripcion,
      estado,
      poster
    }

    actualizarPelicula(peliculaEditar.id, peliculaActualizada)

    // limpiamos todo
    setTitulo("")
    setDescripcion("")
    setEstado("Por ver")
    setPoster("")
  }

  return (
    <div className="formulario-pelicula">

      <h3>Editar pelicula</h3>

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

      <button onClick={handleSubmit}>Actualizar</button>

      {/* boton para cancelar la edicion */}
      <button onClick={() => setPeliculaEditar(null)}>Cancelar</button>
    </div>
  )
}

export default FormularioPelicula
