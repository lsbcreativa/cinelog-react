import React from "react"
import useFormulario from "../../hooks/useFormulario"
import Boton from "../Boton/Boton"
import Rating from "../Rating/Rating"
import './FormularioPelicula.css'

// formulario para editar peliculas, aparece cuando el usuario le da click a editar
function FormularioPelicula({ actualizarPelicula, peliculaEditar, setPeliculaEditar }) {
  const { titulo, descripcion, estado, poster, rating, handleChange, handleSubmit } = useFormulario(peliculaEditar, actualizarPelicula)

  return (
    <div className="formulario-pelicula">
      <h3>Editar pelicula</h3>

      <input type="text" placeholder="Titulo"
        value={titulo}
        onChange={(e) => handleChange("titulo", e.target.value)}
      />

      <textarea placeholder="Descripcion de la pelicula" value={descripcion}
        onChange={(e) => handleChange("descripcion", e.target.value)}
      />

      <select value={estado} onChange={(e) => handleChange("estado", e.target.value)}>
        <option value="Por ver">Por ver</option>
        <option value="Vista">Vista</option>
      </select>

      <div className="formulario-rating">
        <label>Rating:</label>
        <Rating valor={rating} onChange={(val) => handleChange("rating", val)} />
      </div>

      <Boton onClick={handleSubmit} texto="Actualizar" className="boton-primario" />

      {/* boton para cancelar la edicion */}
      <Boton onClick={() => setPeliculaEditar(null)} texto="Cancelar" className="boton-secundario" />
    </div>
  )
}

export default FormularioPelicula
