import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"

// hook personalizado que maneja toda la logica de peliculas con firestore
function usePeliculas() {
  const [peliculas, setPeliculas] = useState([])
  const [peliculaEditar, setPeliculaEditar] = useState(null)
  const [cargando, setCargando] = useState(true)

  const peliculasColeccion = collection(db, "peliculas")

  // trae todas las peliculas de firestore
  const obtenerPeliculas = async () => {
    setCargando(true)
    const data = await getDocs(peliculasColeccion)
    const listaPeliculas = data.docs.map((docu) => ({
      ...docu.data(),
      id: docu.id
    }))
    setPeliculas(listaPeliculas)
    setCargando(false)
  }

  // se ejecuta cuando carga por primera vez
  useEffect(() => {
    obtenerPeliculas()
  }, [])

  // agrega una pelicula nueva a firestore
  const agregarPelicula = async (pelicula) => {
    await addDoc(peliculasColeccion, pelicula)
    obtenerPeliculas()
  }

  // actualiza una pelicula que ya existe
  const actualizarPelicula = async (id, nuevaData) => {
    const peliculaDoc = doc(db, "peliculas", id)
    await updateDoc(peliculaDoc, nuevaData)
    setPeliculaEditar(null)
    obtenerPeliculas()
  }

  // elimina una pelicula
  const eliminarPelicula = async (id) => {
    const peliculaDoc = doc(db, "peliculas", id)
    await deleteDoc(peliculaDoc)
    obtenerPeliculas()
  }

  return {
    peliculas,
    peliculaEditar,
    setPeliculaEditar,
    agregarPelicula,
    actualizarPelicula,
    eliminarPelicula,
    cargando
  }
}

export default usePeliculas
