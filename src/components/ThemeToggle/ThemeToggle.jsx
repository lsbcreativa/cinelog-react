import React, { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import './ThemeToggle.css'

// boton para cambiar entre dark y light mode
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const guardado = localStorage.getItem("cinelog-theme")
    return guardado ? guardado === "dark" : true
  })

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light")
    localStorage.setItem("cinelog-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
