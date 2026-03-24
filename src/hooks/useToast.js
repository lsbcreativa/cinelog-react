import { useState, useCallback } from "react"

// hook para manejar notificaciones toast
function useToast() {
  const [toast, setToast] = useState({ mensaje: "", visible: false, tipo: "exito" })

  const mostrarToast = useCallback((mensaje, tipo = "exito") => {
    setToast({ mensaje, visible: true, tipo })

    // se oculta despues de 3 segundos
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }))
    }, 3000)
  }, [])

  return { toast, mostrarToast }
}

export default useToast
