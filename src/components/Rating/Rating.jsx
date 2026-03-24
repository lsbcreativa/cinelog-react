import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import './Rating.css'

// componente de rating con 5 estrellas
function Rating({ valor = 0, onChange, readonly = false }) {
  const [hover, setHover] = useState(0)

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((estrella) => (
        <FaStar
          key={estrella}
          className={`rating-estrella ${estrella <= (hover || valor) ? "activa" : ""} ${readonly ? "readonly" : ""}`}
          onClick={() => !readonly && onChange && onChange(estrella)}
          onMouseEnter={() => !readonly && setHover(estrella)}
          onMouseLeave={() => !readonly && setHover(0)}
        />
      ))}
    </div>
  )
}

export default Rating
