import React, { useState } from "react"
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"
import Spinner from "../Spinner/Spinner"
import EstadoVacio from "../EstadoVacio/EstadoVacio"
import './ListaPeliculas.css'

const PELICULAS_POR_PAGINA = 6

// este componente recibe el array de peliculas y las muestra en grid
function ListaPeliculas({ peliculas, eliminarPelicula, setPeliculaEditar, actualizarPelicula, cargando }) {
  const [filtro, setFiltro] = useState("")
  const [ordenarPor, setOrdenarPor] = useState("nombre")
  const [mostrarTodosPorVer, setMostrarTodosPorVer] = useState(false)
  const [mostrarTodosVistas, setMostrarTodosVistas] = useState(false)

  if (cargando) {
    return <Spinner texto="Cargando peliculas..." />
  }

  // filtramos por nombre
  let peliculasFiltradas = peliculas.filter((peli) =>
    peli.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  // ordenamos
  peliculasFiltradas = [...peliculasFiltradas].sort((a, b) => {
    if (ordenarPor === "nombre") return a.titulo.localeCompare(b.titulo)
    if (ordenarPor === "rating") return (b.rating || 0) - (a.rating || 0)
    return 0
  })

  const porVer = peliculasFiltradas.filter((peli) => peli.estado === "Por ver")
  const yaVistas = peliculasFiltradas.filter((peli) => peli.estado === "Vista")

  // paginacion
  const porVerVisible = mostrarTodosPorVer ? porVer : porVer.slice(0, PELICULAS_POR_PAGINA)
  const vistasVisible = mostrarTodosVistas ? yaVistas : yaVistas.slice(0, PELICULAS_POR_PAGINA)

  return (
    <div className="lista-peliculas-container">

      {/* controles: filtro + ordenamiento */}
      {peliculas.length > 0 && (
        <div className="lista-controles">
          <input
            className="filtro-peliculas"
            type="text"
            placeholder="Filtrar por nombre..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <select
            className="ordenar-peliculas"
            value={ordenarPor}
            onChange={(e) => setOrdenarPor(e.target.value)}
          >
            <option value="nombre">Ordenar: A-Z</option>
            <option value="rating">Ordenar: Rating</option>
          </select>
        </div>
      )}

      <div className="lista-peliculas">

        {/* seccion por ver */}
        <div className="seccion-lista">
          <h3>Peliculas por ver ({porVer.length})</h3>

          {porVer.length === 0 && (
            <EstadoVacio mensaje="No tienes peliculas pendientes para ver" />
          )}

          <div className="grid-peliculas">
            {porVerVisible.map((pelicula) => (
              <TarjetaPelicula
                key={pelicula.id}
                pelicula={pelicula}
                eliminarPelicula={eliminarPelicula}
                setPeliculaEditar={setPeliculaEditar}
                actualizarPelicula={actualizarPelicula}
              />
            ))}
          </div>

          {porVer.length > PELICULAS_POR_PAGINA && (
            <button className="btn-ver-mas" onClick={() => setMostrarTodosPorVer(!mostrarTodosPorVer)}>
              {mostrarTodosPorVer ? "Ver menos" : `Ver mas (${porVer.length - PELICULAS_POR_PAGINA} restantes)`}
            </button>
          )}
        </div>

        {/* seccion ya vistas */}
        <div className="seccion-lista">
          <h3>Peliculas ya vistas ({yaVistas.length})</h3>

          {yaVistas.length === 0 && (
            <EstadoVacio mensaje="Todavia no viste ninguna pelicula" />
          )}

          <div className="grid-peliculas">
            {vistasVisible.map((pelicula) => (
              <TarjetaPelicula
                key={pelicula.id}
                pelicula={pelicula}
                eliminarPelicula={eliminarPelicula}
                setPeliculaEditar={setPeliculaEditar}
                actualizarPelicula={actualizarPelicula}
              />
            ))}
          </div>

          {yaVistas.length > PELICULAS_POR_PAGINA && (
            <button className="btn-ver-mas" onClick={() => setMostrarTodosVistas(!mostrarTodosVistas)}>
              {mostrarTodosVistas ? "Ver menos" : `Ver mas (${yaVistas.length - PELICULAS_POR_PAGINA} restantes)`}
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default ListaPeliculas
