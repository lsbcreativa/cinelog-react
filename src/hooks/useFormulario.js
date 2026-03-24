import { useState, useEffect } from "react"

// hook personalizado que maneja la logica del formulario de edicion
function useFormulario(peliculaEditar, actualizarPelicula) {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estado, setEstado] = useState("Por ver")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState(0)

  // cuando cambia la pelicula a editar, carga los datos en el formulario
  useEffect(() => {
    if (peliculaEditar) {
      setTitulo(peliculaEditar.titulo)
      setDescripcion(peliculaEditar.descripcion)
      setEstado(peliculaEditar.estado)
      setPoster(peliculaEditar.poster)
      setRating(peliculaEditar.rating || 0)
    }
  }, [peliculaEditar])

  // maneja el cambio de cualquier campo del formulario
  const handleChange = (campo, valor) => {
    if (campo === "titulo") setTitulo(valor)
    if (campo === "descripcion") setDescripcion(valor)
    if (campo === "estado") setEstado(valor)
    if (campo === "poster") setPoster(valor)
    if (campo === "rating") setRating(valor)
  }

  // envia los datos actualizados
  const handleSubmit = (e) => {
    e.preventDefault()
    const peliculaActualizada = { titulo, descripcion, estado, poster, rating }
    actualizarPelicula(peliculaEditar.id, peliculaActualizada)
    setTitulo("")
    setDescripcion("")
    setEstado("Por ver")
    setPoster("")
    setRating(0)
  }

  return { titulo, descripcion, estado, poster, rating, handleChange, handleSubmit }
}

export default useFormulario
