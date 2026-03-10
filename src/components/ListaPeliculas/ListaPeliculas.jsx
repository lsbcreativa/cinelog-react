import React from "react"

// importamos la tarjeta de pelicula
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"

  // este componente recibe el array de peliculas y las muestra en una lista ambien recibe las funciones de eliminar y editar para pasarselas a cada tarjeta

function ListaPeliculas({ peliculas, eliminarPelicula, setPeliculaEditar }) {

  return (
    <div className="lista-peliculas">
      <h3>Mis peliculas</h3>

      {   /* recorremos el array de peliculas y por cada una renderizamos una TarjetaPelicula */}

  {peliculas.map((pelicula) => (
        <TarjetaPelicula
            key={pelicula.id}
        pelicula={pelicula}
          eliminarPelicula={eliminarPelicula}
          setPeliculaEditar={setPeliculaEditar}

        />
      ))
      }
    </div>
  )
}

export default ListaPeliculas
