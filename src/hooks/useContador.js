import { useState, useEffect, useRef } from "react"

// hook que anima un numero de 0 al valor objetivo
function useContador(objetivo, duracion = 500) {
  const [valor, setValor] = useState(0)
  const prevObjetivo = useRef(0)

  useEffect(() => {
    const inicio = prevObjetivo.current
    const diferencia = objetivo - inicio
    if (diferencia === 0) return

    const startTime = performance.now()

    const animar = (currentTime) => {
      const elapsed = currentTime - startTime
      const progreso = Math.min(elapsed / duracion, 1)

      // easing suave
      const eased = 1 - Math.pow(1 - progreso, 3)
      setValor(Math.round(inicio + diferencia * eased))

      if (progreso < 1) {
        requestAnimationFrame(animar)
      }
    }

    requestAnimationFrame(animar)
    prevObjetivo.current = objetivo
  }, [objetivo, duracion])

  return valor
}

export default useContador
