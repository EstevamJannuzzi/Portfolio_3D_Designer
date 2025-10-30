import React from 'react'

const BoxText = ({ text }) => {
  return (
    <div>
      <p className='font-text text-xl text-dark-gray dark:text-light-gray bg-white dark:bg-dark-gray rounded-lg p-4 w-[400px]'>
        {text}
      </p>
    </div>
  )
}

export default BoxText
