import React, { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import './ScrollTop.css'

// boton flotante que aparece al hacer scroll y te lleva arriba
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button className="scroll-top" onClick={scrollArriba}>
      <FaArrowUp />
    </button>
  )
}

export default ScrollTop
