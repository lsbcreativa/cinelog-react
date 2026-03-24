import React from "react"
import useContador from "../../hooks/useContador"
import './Estadisticas.css'

// barra de estadisticas con numeros animados
function Estadisticas({ peliculas }) {
  const total = peliculas.length
  const porVer = peliculas.filter((p) => p.estado === "Por ver").length
  const vistas = peliculas.filter((p) => p.estado === "Vista").length

  const totalAnimado = useContador(total)
  const porVerAnimado = useContador(porVer)
  const vistasAnimado = useContador(vistas)

  return (
    <div className="estadisticas">
      <div className="stat-card">
        <span className="stat-numero">{totalAnimado}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-card stat-pendiente">
        <span className="stat-numero">{porVerAnimado}</span>
        <span className="stat-label">Pendientes</span>
      </div>
      <div className="stat-card stat-vista">
        <span className="stat-numero">{vistasAnimado}</span>
        <span className="stat-label">Vistas</span>
      </div>
    </div>
  )
}

export default Estadisticas
