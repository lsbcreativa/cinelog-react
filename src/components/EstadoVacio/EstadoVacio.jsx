import React from "react"
import './EstadoVacio.css'

// componente que se muestra cuando una lista esta vacia, con ilustracion SVG
function EstadoVacio({ mensaje }) {
  return (
    <div className="estado-vacio">
      {/* SVG de una claqueta de cine */}
      <svg className="estado-vacio-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* cuerpo de la claqueta */}
        <rect x="10" y="35" width="100" height="55" rx="4" fill="#21262d" stroke="#30363d" strokeWidth="2"/>
        {/* parte superior (la tapa que se mueve) */}
        <polygon points="10,35 20,10 110,10 100,35" fill="#30363d" stroke="#484f58" strokeWidth="1.5"/>
        {/* lineas de la claqueta */}
        <line x1="30" y1="12" x2="25" y2="33" stroke="#484f58" strokeWidth="2"/>
        <line x1="50" y1="12" x2="45" y2="33" stroke="#484f58" strokeWidth="2"/>
        <line x1="70" y1="12" x2="65" y2="33" stroke="#484f58" strokeWidth="2"/>
        <line x1="90" y1="12" x2="85" y2="33" stroke="#484f58" strokeWidth="2"/>
        {/* circulo del rollo */}
        <circle cx="35" cy="60" r="12" fill="none" stroke="#484f58" strokeWidth="2"/>
        <circle cx="35" cy="60" r="4" fill="#484f58"/>
        {/* lineas de texto */}
        <rect x="55" y="50" width="40" height="3" rx="1.5" fill="#30363d"/>
        <rect x="55" y="58" width="30" height="3" rx="1.5" fill="#30363d"/>
        <rect x="55" y="66" width="35" height="3" rx="1.5" fill="#30363d"/>
      </svg>
      <p className="estado-vacio-mensaje">{mensaje}</p>
    </div>
  )
}

export default EstadoVacio
