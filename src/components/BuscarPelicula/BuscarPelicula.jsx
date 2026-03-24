import React from "react"
import useBuscarPelicula from "../../hooks/useBuscarPelicula"
import Boton from "../Boton/Boton"
import Spinner from "../Spinner/Spinner"
import './BuscarPelicula.css'

// componente para buscar peliculas en la API de OMDB
function BuscarPelicula({ agregarPelicula, mostrarToast }) {
  const { busqueda, setBusqueda, resultado, buscarPelicula, limpiar, buscando } = useBuscarPelicula(mostrarToast)

  // arma el objeto de la pelicula y la agrega a la lista
  const handleAgregar = () => {
    const nuevaPelicula = {
      titulo: resultado.Title,
      descripcion: resultado.Plot,
      estado: "Por ver",
      poster: resultado.Poster,
      rating: 0
    }
    agregarPelicula(nuevaPelicula)
    limpiar()
  }

  return (
    <div className="buscar-pelicula">
      <h3>Buscar pelicula</h3>

      <input
        type="text"
        placeholder="Escribe el nombre de la pelicula..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && buscarPelicula()}
      />

      <Boton onClick={buscarPelicula} texto="Buscar" className="boton-primario" />

      {/* spinner mientras busca */}
      {buscando && <Spinner texto="Buscando pelicula..." />}

      {/* aca mostramos el resultado si encontro algo */}
      {!buscando && resultado && (
        <div className="resultado-busqueda">
          <img src={resultado.Poster} alt={resultado.Title} />
          <div className="resultado-info">
            <h4>{resultado.Title}</h4>
            <span className="resultado-year">{resultado.Year}</span>
            <p>{resultado.Plot}</p>
            <Boton onClick={handleAgregar} texto="Agregar a mi lista" className="boton-primario" />
          </div>
        </div>
      )}
    </div>
  )
}

export default BuscarPelicula
