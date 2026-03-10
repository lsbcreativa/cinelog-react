import React from "react"

// importo los iconos de react-icons para los botones de editar y eliminar
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"
import './TarjetaPelicula.css'

// tarjeta individual de cada pelicula ca mostramos los datos y los botones para editar o eliminar

function TarjetaPelicula({ pelicula, eliminarPelicula, setPeliculaEditar, actualizarPelicula }) {

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
          <FaEdit /> Editar
        </button>

        {/* boton para eliminar */}

        <button onClick={() => eliminarPelicula(pelicula.id)}>
          <FaTrash /> Eliminar
        </button>

        {/* boton para marcar como vista o por ver */}
        <button
          className={pelicula.estado === "Vista" ? "btn-vista" : "btn-por-ver"}
          onClick={() => {
            const nuevoEstado = pelicula.estado === "Por ver" ? "Vista" : "Por ver"
            actualizarPelicula(pelicula.id, { ...pelicula, estado: nuevoEstado, id: undefined })
          }}
        >
          <FaCheck /> {pelicula.estado === "Por ver" ? "Ya la vi" : "No la vi"}
        </button>
      </div>
    </div>
  )
}

export default TarjetaPelicula
