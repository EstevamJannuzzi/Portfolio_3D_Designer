import React from 'react'

const BoxtextResume = ({title, description, size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"}) => {
  return (
    <div className={`rounded-lg py-8 px-6 mb-4 w-90 sm:w-164 lg:w-180 xl:w-196 border-l-12 border-sky-blue dark:border-blue-iris bg-white/65 dark:bg-dark-gray/85`}>
      <h2 className={`text-[${size}] text-left text-dark-gray dark:text-light-gray`}>{title}</h2>
      <hr className='w-1/2 border-t-2 my-4 border-sky-blue dark:border-blue-iris' />
      <p className={`text-left font-text ${size} text-dark-gray dark:text-light-gray`}>{description}</p>
    </div>
  )
}

export default BoxtextResume
