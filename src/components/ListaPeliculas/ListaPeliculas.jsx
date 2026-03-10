import React from "react"

// importamos la tarjeta de pelicula
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"
import './ListaPeliculas.css'

  // este componente recibe el array de peliculas y las muestra en dos listas separadas

function ListaPeliculas({ peliculas, eliminarPelicula, setPeliculaEditar, actualizarPelicula }) {

  // separamos las peliculas en dos grupos: las que no vimos y las que ya vimos
  const porVer = peliculas.filter((peli) => peli.estado === "Por ver")
  const yaVistas = peliculas.filter((peli) => peli.estado === "Vista")

  return (
    <div className="lista-peliculas">

      {/* seccion de peliculas por ver */}
      <div className="seccion-lista">
        <h3>Peliculas por ver ({porVer.length})</h3>

        {porVer.length === 0 && <p>No tenes peliculas pendientes</p>}

        {porVer.map((pelicula) => (
          <TarjetaPelicula
              key={pelicula.id}
          pelicula={pelicula}
            eliminarPelicula={eliminarPelicula}
            setPeliculaEditar={setPeliculaEditar}
            actualizarPelicula={actualizarPelicula}
          />
        ))}
      </div>

      {/* seccion de peliculas ya vistas */}
      <div className="seccion-lista">
        <h3>Peliculas ya vistas ({yaVistas.length})</h3>

        {yaVistas.length === 0 && <p>Todavia no viste ninguna pelicula</p>}

        {yaVistas.map((pelicula) => (
          <TarjetaPelicula
              key={pelicula.id}
          pelicula={pelicula}
            eliminarPelicula={eliminarPelicula}
            setPeliculaEditar={setPeliculaEditar}
            actualizarPelicula={actualizarPelicula}
          />
        ))}
      </div>

    </div>
  )
}

export default ListaPeliculas
