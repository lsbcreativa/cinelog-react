import React, { useState } from "react"
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"
import Boton from "../Boton/Boton"
import Modal from "../Modal/Modal"
import Rating from "../Rating/Rating"
import './TarjetaPelicula.css'

// tarjeta individual de cada pelicula
function TarjetaPelicula({ pelicula, eliminarPelicula, setPeliculaEditar, actualizarPelicula }) {
  const [mostrarModal, setMostrarModal] = useState(false)

  // cambia el estado de la pelicula entre "Por ver" y "Vista"
  const toggleEstado = () => {
    const nuevoEstado = pelicula.estado === "Por ver" ? "Vista" : "Por ver"
    actualizarPelicula(pelicula.id, { ...pelicula, estado: nuevoEstado })
  }

  // cambia el rating de la pelicula
  const cambiarRating = (nuevoRating) => {
    actualizarPelicula(pelicula.id, { ...pelicula, rating: nuevoRating })
  }

  return (
    <div className="tarjeta-pelicula">
      {/* si tiene poster lo mostramos */}
      {pelicula.poster && (
        <img src={pelicula.poster} alt={pelicula.titulo} />
      )}

      <h4>{pelicula.titulo}</h4>
      <p>{pelicula.descripcion}</p>
      <span className="estado">{pelicula.estado}</span>

      {/* rating con estrellas */}
      <Rating valor={pelicula.rating || 0} onChange={cambiarRating} />

      <div className="botones-tarjeta">
        <Boton
          onClick={() => setPeliculaEditar(pelicula)}
          icono={<FaEdit />}
          texto="Editar"
          className="boton-editar"
        />

        <Boton
          onClick={() => setMostrarModal(true)}
          icono={<FaTrash />}
          texto="Eliminar"
          className="boton-eliminar"
        />

        <Boton
          onClick={toggleEstado}
          icono={<FaCheck />}
          texto={pelicula.estado === "Por ver" ? "Ya la vi" : "No la vi"}
          className={pelicula.estado === "Vista" ? "boton-vista" : "boton-por-ver"}
        />
      </div>

      {/* modal de confirmacion para eliminar */}
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
