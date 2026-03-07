import React from "react";
import { useState } from "react";

// este componente es para buscar peliculas en la API de OMDB ecibe setPeliculaOMDB que es la funcion para guardar la pelicula encontrada en el estado del App

function BuscarPelicula({ setPeliculaOMDB }) {


  // estado para guardar lo que escribe el usuario en el input

  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="buscar-pelicula">
      <h3>Buscar pelicula</h3>

      <input
        type="text"
    placeholder="Escribe el nombre de la pelicula..."
        value={busqueda}
        onChange={  (e) =>  setBusqueda(e.target.value)}
      />

      <button>Buscar</button>
    </div>
  )
}

export default BuscarPelicula;
