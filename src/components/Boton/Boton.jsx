import React from "react"
import './Boton.css'

// componente reutilizable de boton con icono y texto
function Boton({ onClick, icono, texto, className }) {
  return (
    <button className={`boton ${className || ""}`} onClick={onClick}>
      {icono && <span className="boton-icono">{icono}</span>}
      {texto}
    </button>
  )
}

export default Boton
