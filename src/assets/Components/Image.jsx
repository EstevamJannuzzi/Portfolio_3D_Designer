import React from "react"

const Image = ({ src, alt, width, margin, distance, special }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${margin} ${distance} ${special}`}
    />
  )
}

export default Image
