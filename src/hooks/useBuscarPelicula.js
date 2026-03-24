import { useState } from "react"

// hook personalizado que maneja la busqueda de peliculas en la API de OMDB
function useBuscarPelicula(mostrarToast) {
  const [busqueda, setBusqueda] = useState("")
  const [resultado, setResultado] = useState(null)
  const [buscando, setBuscando] = useState(false)

  // busca la pelicula en la api de OMDB
  const buscarPelicula = async () => {
    if (busqueda === "") return

    setBuscando(true)
    const respuesta = await fetch(`https://www.omdbapi.com/?t=${busqueda}&apikey=e65b8b0a`)
    const data = await respuesta.json()

    if (data.Response === "True") {
      setResultado(data)
    } else {
      if (mostrarToast) mostrarToast("No se encontro la pelicula", "error")
      setResultado(null)
    }
    setBuscando(false)
  }

  // limpia la busqueda y el resultado
  const limpiar = () => {
    setResultado(null)
    setBusqueda("")
  }

  return {
    busqueda,
    setBusqueda,
    resultado,
    buscarPelicula,
    limpiar,
    buscando
  }
}

export default useBuscarPelicula
