//Arrancamos con la importación de react y los hooks que vamos a usar

import React from "react";
import { useEffect, useState } from "react";

// aca importamos las funciones de firestore que necesitamos (getDocs = traer documentos, addDoc = agregar, updateDoc = actualizar, deleteDoc = eliminar)

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// importo la base de datos que configuramos en firebase/config.js
import { db } from "./firebase/config";

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

  return (
    <div className="App">
      <h1>CineLog</h1>
      <p>Tu catalogo de peliculas</p>
    </div>
  )
}

export default App;
