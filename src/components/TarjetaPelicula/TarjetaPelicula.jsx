import React, { useState } from "react"
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"
import Boton from "../Boton/Boton"
import Modal from "../Modal/Modal"
import Rating from "../Rating/Rating"
import Tooltip from "../Tooltip/Tooltip"
import './TarjetaPelicula.css'

// tarjeta individual de cada pelicula
function TarjetaPelicula({ pelicula, eliminarPelicula, setPeliculaEditar, actualizarPelicula }) {
  const [mostrarModal, setMostrarModal] = useState(false)

  const toggleEstado = () => {
    const nuevoEstado = pelicula.estado === "Por ver" ? "Vista" : "Por ver"
    actualizarPelicula(pelicula.id, { ...pelicula, estado: nuevoEstado })
  }

  const cambiarRating = (nuevoRating) => {
    actualizarPelicula(pelicula.id, { ...pelicula, rating: nuevoRating })
  }

  return (
    <div className="tarjeta-pelicula">
      {pelicula.poster && (
        <img src={pelicula.poster} alt={pelicula.titulo} />
      )}

      <h4>{pelicula.titulo}</h4>
      <p className="tarjeta-descripcion">{pelicula.descripcion}</p>
      <span className="estado">{pelicula.estado}</span>

      {/* espacio fijo para rating */}
      <div className="tarjeta-rating-space">
        {pelicula.estado === "Vista" && (
          <Rating valor={pelicula.rating || 0} onChange={cambiarRating} />
        )}
      </div>

      <div className="botones-tarjeta">
        <Tooltip texto="Editar datos de la pelicula">
          <Boton
            onClick={() => setPeliculaEditar(pelicula)}
            icono={<FaEdit />}
            texto="Editar"
            className="boton-editar"
          />
        </Tooltip>

        <Tooltip texto="Eliminar de tu lista">
          <Boton
            onClick={() => setMostrarModal(true)}
            icono={<FaTrash />}
            texto="Eliminar"
            className="boton-eliminar"
          />
        </Tooltip>

        <Tooltip texto={pelicula.estado === "Por ver" ? "Marcar como vista" : "Marcar como pendiente"}>
          <Boton
            onClick={toggleEstado}
            icono={<FaCheck />}
            texto={pelicula.estado === "Por ver" ? "Ya la vi" : "No la vi"}
            className={pelicula.estado === "Vista" ? "boton-vista" : "boton-por-ver"}
          />
        </Tooltip>
      </div>

      <Modal
        visible={mostrarModal}
        mensaje={`Seguro que queres eliminar "${pelicula.titulo}"?`}
        onConfirmar={() => {
          eliminarPelicula(pelicula.id)
          setMostrarModal(false)
        }}
        onCancelar={() => setMostrarModal(false)}
      />
    </div>
  )
}

export default TarjetaPelicula
