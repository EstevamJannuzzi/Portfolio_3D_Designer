import React from 'react'
import Banners from '../images/Banners.png'
import Logo from '../images/Logo3D.png'

const menu = () => {
  return (
    <div className='w-full flex flex-inline items-center justify-between bg-white/20 gap-4 mt-6'>
      <div className='flex flex-inline justify-center items-center gap-x-6 ml-8'>
        <img src={Logo} alt="Logo" className='w-[60px] sm:w-[86px] lg:w-[100px] xl:w-[120px]' />
        <img src={Banners} alt="Banners" className='w-[120px] sm:w-[180px] lg:w-[280px] xl:w-[380px]' />
      </div>
      <div className='flex flex-inline justify-between gap-x-4 items-center mr-12'>
        <h1>Home</h1>
        <h1>Portfólio</h1>
        <h1>Currículo</h1>
        <h1>Contatos</h1>
      </div>
    </div>
  )
}

export default menu
