import React from "react"
import Boton from "../Boton/Boton"
import './Modal.css'

// modal de confirmacion reutilizable
function Modal({ visible, mensaje, onConfirmar, onCancelar }) {
  if (!visible) return null

  return (
    <div className="modal-overlay" onClick={onCancelar}>
      <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
        <p className="modal-mensaje">{mensaje}</p>
        <div className="modal-botones">
          <Boton onClick={onConfirmar} texto="Confirmar" className="boton-eliminar" />
          <Boton onClick={onCancelar} texto="Cancelar" className="boton-secundario" />
        </div>
      </div>
    </div>
  )
}

export default Modal
