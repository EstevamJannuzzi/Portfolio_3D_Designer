import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Frog from '../assets/images/Frog.webp'

const Curriculo = () => {
  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text="Currículo"
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <img
        src={Frog}
        alt="Frog"
        className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] xl:w-[900px]"
      />
      </div>
    </DefaultScreen>
  )
}

export default Curriculo
