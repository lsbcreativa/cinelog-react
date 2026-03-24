import React from "react"
import usePeliculas from "./hooks/usePeliculas"
import useToast from "./hooks/useToast"
import BuscarPelicula from "./components/BuscarPelicula/BuscarPelicula"
import FormularioPelicula from "./components/FormularioPelicula/FormularioPelicula"
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas"
import Estadisticas from "./components/Estadisticas/Estadisticas"
import Toast from "./components/Toast/Toast"
import ScrollTop from "./components/ScrollTop/ScrollTop"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import './App.css'

function App() {
  const {
    peliculas,
    peliculaEditar,
    setPeliculaEditar,
    agregarPelicula,
    actualizarPelicula,
    eliminarPelicula,
    cargando
  } = usePeliculas()

  const { toast, mostrarToast } = useToast()

  // wrappers que muestran toast despues de cada accion
  const handleAgregar = async (pelicula) => {
    await agregarPelicula(pelicula)
    mostrarToast("Pelicula agregada a tu lista!", "exito")
  }

  const handleEliminar = async (id) => {
    await eliminarPelicula(id)
    mostrarToast("Pelicula eliminada", "info")
  }

  const handleActualizar = async (id, data) => {
    await actualizarPelicula(id, data)
    mostrarToast("Pelicula actualizada", "exito")
  }

  return (
    <div className="App">
      <ThemeToggle />

      <header className="app-header">
        <div className="marquee">
          {/* fila de luces de arriba */}
          <div className="marquee-luces marquee-luces-top">
            {Array.from({ length: 16 }, (_, i) => (
              <span key={`top-${i}`} style={{ animationDelay: `${i * 0.15}s` }}></span>
            ))}
          </div>

          {/* luces del lado izquierdo */}
          <div className="marquee-luces marquee-luces-left">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={`left-${i}`} style={{ animationDelay: `${(i + 16) * 0.15}s` }}></span>
            ))}
          </div>

          <h1>Cine<span>Log</span></h1>

          {/* luces del lado derecho */}
          <div className="marquee-luces marquee-luces-right">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={`right-${i}`} style={{ animationDelay: `${(i + 20) * 0.15}s` }}></span>
            ))}
          </div>

          {/* fila de luces de abajo */}
          <div className="marquee-luces marquee-luces-bottom">
            {Array.from({ length: 16 }, (_, i) => (
              <span key={`bottom-${i}`} style={{ animationDelay: `${(i + 24) * 0.15}s` }}></span>
            ))}
          </div>
        </div>

        <p className="app-subtitulo">Tu catalogo personal de peliculas y series</p>
        <p className="app-descripcion">Busca, organiza y lleva el control de todo lo que quieras ver</p>
      </header>

      {/* estadisticas rapidas */}
      <Estadisticas peliculas={peliculas} />

      {/* componente para buscar peliculas en la api */}
      <BuscarPelicula agregarPelicula={handleAgregar} mostrarToast={mostrarToast} />

      {/* el formulario solo aparece cuando estamos editando una pelicula */}
      {peliculaEditar && (
        <FormularioPelicula
          actualizarPelicula={handleActualizar}
          peliculaEditar={peliculaEditar}
          setPeliculaEditar={setPeliculaEditar}
        />
      )}

      {/* aca mostramos la lista de peliculas que tenemos guardadas */}
      <ListaPeliculas
        peliculas={peliculas}
        eliminarPelicula={handleEliminar}
        setPeliculaEditar={setPeliculaEditar}
        actualizarPelicula={handleActualizar}
        cargando={cargando}
      />

      {/* notificacion toast */}
      <Toast mensaje={toast.mensaje} visible={toast.visible} tipo={toast.tipo} />

      {/* boton scroll to top */}
      <ScrollTop />

      <footer className="app-footer">
        <p>Creado por <a href="https://andresbotta.dev" target="_blank" rel="noopener noreferrer">AndresBottaDev</a></p>
        <p className="footer-tech">Hecho con React + Firebase</p>
      </footer>
    </div>
  )
}

export default App
