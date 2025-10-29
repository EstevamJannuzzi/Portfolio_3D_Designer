import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'

const Portfolio = () => {
  return (
    <DefaultScreen className='z-30'>
      <h1 className="text-4xl font-bold text-orange dark:text-green mb-6">Portfólio</h1>
      <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
        Aqui você pode explorar alguns dos meus projetos mais recentes e
        impressionantes.
      </p>
    </DefaultScreen>
  )
}

export default Portfolio
