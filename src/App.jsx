//Arrancamos con la importación de react y los hooks que vamos a usar

import React from "react";
import { useEffect, useState } from "react";

// aca importamos las funciones de firestore que necesitamos (getDocs = traer documentos, addDoc = agregar, updateDoc = actualizar, deleteDoc = eliminar)

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// importo la base de datos que configuramos en firebase/config.js
import { db } from "./firebase/config";

// importamos el componente de buscar pelicula
import BuscarPelicula from "./components/BuscarPelicula";

// importamos el formulario para agregar y editar peliculas
import FormularioPelicula from "./components/FormularioPelicula";

// importamos la lista de peliculas
import ListaPeliculas from "./components/ListaPeliculas";

// importamos los estilos


import './App.css'

function App() {

  // aca creo los estados que voy a necesitar


  // peliculas va a guardar la lista de peliculas que traemos de firestore
  const [peliculas, setPeliculas] = useState([])


  // Aqupi sabemos cual pelicula estamos editando, si no estamos editando ninguna es null

  const [peliculaEditar, setPeliculaEditar] = useState(null)

  // aca guardamos la pelicula que buscamos en la api de OMDB
  const [peliculaOMDB, setPeliculaOMDB] = useState(null)

  // esta es la referencia a la coleccion "peliculas" en firestore...es como decirle "quiero trabajar con esta coleccion"
  
  const peliculasColeccion = collection(db, "peliculas")


  // funcion para traer todas las peliculas de firestore es async porque getDocs tarda un poco en traer los datos

  const obtenerPeliculas = async () => {
    const data = await getDocs(peliculasColeccion)


    // Hago un .map a los docs para tener un array mas facil de usar le agregamos el id del documento porq firestore no lo mete adentro del data()
    const listaPeliculas = data.docs.map((docu) => ({
      ...docu.data(),
      id: docu.id
    }))
    setPeliculas(listaPeliculas)
  }

  // esto se ejecuta cuando la app carga por primera vez, trae las peliculas
  useEffect(() => {
    obtenerPeliculas()
  }, [])


  // funcion para agregar una pelicula nueva a firestore
  const agregarPelicula = async (pelicula) => {
    await addDoc(peliculasColeccion, pelicula)

    // despues de agregar volvemos a traer la lista para que se actualice

    obtenerPeliculas()
  }

  // funcion para actualizar una pelicula que ya existe


  const actualizarPelicula = async (id, nuevaData) => {
    // creamos la referencia al documento especifico que queremos actualizar

    const peliculaDoc = doc(db, "peliculas", id)

      await updateDoc(peliculaDoc, nuevaData)
    // limpiamos el estado de edicion

    setPeliculaEditar(null)
    obtenerPeliculas()
  }

  // funcion para borrar una pelicula
  const eliminarPelicula = async (id) => {
    const peliculaDoc = doc(db, "peliculas", id)
    await deleteDoc(peliculaDoc)
    
    // recargamos la lista
    obtenerPeliculas()
  }


  return (
    <div className="App">
      <h1>CineLog</h1>
      <p>Tu catalogo de peliculas</p>

      {/* componente para buscar peliculas en la api */}
      <BuscarPelicula setPeliculaOMDB={setPeliculaOMDB} />

      {/* formulario para agregar o editar peliculas */}
      <FormularioPelicula
        agregarPelicula={agregarPelicula}
        actualizarPelicula={actualizarPelicula}
        peliculaEditar={peliculaEditar}
        setPeliculaEditar={setPeliculaEditar}
        peliculaOMDB={peliculaOMDB}
        setPeliculaOMDB={setPeliculaOMDB}
      />

      {/* aca mostramos la lista de peliculas que tenemos guardadas */}
      <ListaPeliculas
        peliculas={peliculas}
        eliminarPelicula={eliminarPelicula}
        setPeliculaEditar={setPeliculaEditar}
      />
    </div>
  )
}

export default App;
