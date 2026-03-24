import React from "react"
import './Spinner.css'

// componente de carga con animacion
function Spinner({ texto }) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      {texto && <p className="spinner-texto">{texto}</p>}
    </div>
  )
}

export default Spinner
