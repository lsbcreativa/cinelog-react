import React from "react"
import './Estadisticas.css'

// barra de estadisticas con 3 cards
function Estadisticas({ peliculas }) {
  const total = peliculas.length
  const porVer = peliculas.filter((p) => p.estado === "Por ver").length
  const vistas = peliculas.filter((p) => p.estado === "Vista").length

  return (
    <div className="estadisticas">
      <div className="stat-card">
        <span className="stat-numero">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-card stat-pendiente">
        <span className="stat-numero">{porVer}</span>
        <span className="stat-label">Pendientes</span>
      </div>
      <div className="stat-card stat-vista">
        <span className="stat-numero">{vistas}</span>
        <span className="stat-label">Vistas</span>
      </div>
    </div>
  )
}

export default Estadisticas
