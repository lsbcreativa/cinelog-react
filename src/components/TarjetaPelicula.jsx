import React from "react"

// importo los iconos de react-icons para los botones de editar y eliminar
import { FaEditar, FaTrash } from "react-icons/fa"

// tarjeta individual de cada pelicula ca mostramos los datos y los botones para editar o eliminar

function TarjetaPelicula({ pelicula, eliminarPelicula, setPeliculaEditar }) {

  return (
    <div className="tarjeta-pelicula">

      {/* si tiene poster lo mostramos */}
      {pelicula.poster && (
        <img src={pelicula.poster} alt={pelicula.titulo} />
      )}

      <h4>{pelicula.titulo}</h4>
      <p>{pelicula.descripcion}</p>
      <span className="estado">{pelicula.estado}</span>

      <div className="botones-tarjeta">
  {/* boton para editar */}

        <button onClick={() => setPeliculaEditar(pelicula)}>
          <FaEditar /> Editar
        </button>

        {/* boton para eliminar */}

        <button onClick={() => eliminarPelicula(pelicula.id)}>
          <FaTrash /> Eliminar
        </button>
      </div>
    </div>
  )
}

export default TarjetaPelicula
