import React from "react"

const Image = ({
  src,
  alt = 'Imagem',
  width = 'w-[320px] sm:w-[640px] lg:w-[750px] xl:w-[390px]',
  height,
  margin,
  distance,
  special
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${height} ${margin} ${distance} ${special}`}
    />
  )
}

export default Image
