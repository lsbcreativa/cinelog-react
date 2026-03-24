import React from "react"
import './Tooltip.css'

// tooltip que se muestra al hacer hover
function Tooltip({ texto, children }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <span className="tooltip-texto">{texto}</span>
    </div>
  )
}

export default Tooltip
