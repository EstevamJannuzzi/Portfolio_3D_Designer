import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'

const Portfolio = () => {
  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text="Portfólio"
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
      </div>
    </DefaultScreen>
  )
}

export default Portfolio
