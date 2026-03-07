import React from "react";
import { useState } from "react";

// este componente es para buscar peliculas en la API de OMDB ecibe setPeliculaOMDB que es la funcion para guardar la pelicula encontrada en el estado del App

function BuscarPelicula({ setPeliculaOMDB }) {


  // estado para guardar lo que escribe el usuario en el input

  const [busqueda, setBusqueda] = useState("")

  // aca guardamos lo que nos devuelve la api
  const [resultado, setResultado] = useState(null)

  // funcion que busca la pelicula en la api de OMDB
  const buscarPelicula = async () => {
    if (busqueda === "") return  // si no escribio nada no busca

    const respuesta = await fetch(`http://www.omdbapi.com/?t=${busqueda}`)
    const data = await respuesta.json()

    if (data.Response === "True") {
      setResultado(data)
    } else {
      alert("No se encontro la pelicula")
      setResultado(null)
    }
  }

  return (
    <div className="buscar-pelicula">
      <h3>Buscar pelicula</h3>

      <input
        type="text"
    placeholder="Escribe el nombre de la pelicula..."
        value={busqueda}
        onChange={  (e) =>  setBusqueda(e.target.value)}
      />

      <button onClick={buscarPelicula}>Buscar</button>

      {/* aca mostramos el resultado si encontro algo */}
      {resultado && (
        <div className="resultado-busqueda">
          <img src={resultado.Poster} alt={resultado.Title} />
          <h4>{resultado.Title} ({resultado.Year})</h4>
          <p>{resultado.Plot}</p>
          <button onClick={() => {
            setPeliculaOMDB(resultado)
            setResultado(null)
            setBusqueda("")
          }}>Agregar a mi lista</button>
        </div>
      )}
    </div>
  )
}

export default BuscarPelicula;
