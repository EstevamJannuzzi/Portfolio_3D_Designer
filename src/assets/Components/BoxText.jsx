import React from 'react'

const BoxText = ({ text, width, distance, margin, size, position = 'left' }) => {
  // Define se a borda fica à esquerda ou à direita
  const borderSide = position === 'right' 
    ? 'border-r-12' 
    : 'border-l-12'

  return (
    <div>
      <p
        className={`font-text ${size} text-light-gray 
        bg-dark-gray/85 rounded-lg p-4 ${width} ${distance} ${margin} 
        ${borderSide} border-purple`}
      >
        {text}
      </p>
    </div>
  )
}

export default BoxText
