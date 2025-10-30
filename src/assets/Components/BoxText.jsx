import React from 'react'

const BoxText = ({ text, width, distance, margin, size }) => {
  return (
    <div>
      <p className={`font-text ${size} text-dark-gray dark:text-light-gray bg-white/65 dark:bg-dark-gray/85 rounded-lg p-4 ${width} ${distance} ${margin}`}>
        {text}
      </p>
    </div>
  )
}

export default BoxText
