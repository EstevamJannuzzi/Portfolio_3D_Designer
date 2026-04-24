import React from 'react'

const BoxText = ({ text, width, distance, margin, size, position = 'left' }) => {
  // Define se a borda fica à esquerda ou à direita
  const borderSide = position === 'right' 
    ? 'border-r-12' 
    : 'border-l-12'

  return (
    <div>
      <p
        className={`font-text ${size} text-dark-gray dark:text-light-gray 
        bg-white/65 dark:bg-dark-gray/85 rounded-lg p-4 ${width} ${distance} ${margin} 
        ${borderSide} border-sky-blue dark:border-blue-iris`}
      >
        {text}
      </p>
    </div>
  )
}

export default BoxText
