import React from "react"
import './Toast.css'

// notificacion flotante que aparece abajo de la pantalla
function Toast({ mensaje, visible, tipo }) {
  if (!visible) return null

  return (
    <div className={`toast toast-${tipo}`}>
      <p>{mensaje}</p>
    </div>
  )
}

export default Toast
