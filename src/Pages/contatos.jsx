import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'

const Contatos = () => {
  return (
    <DefaultScreen className='z-30'>
      <h1 className="text-4xl font-bold text-orange dark:text-green mb-6">Contatos</h1>
      <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
        Aqui você pode encontrar informações sobre como entrar em contato comigo.
      </p>
    </DefaultScreen>
  )
}

export default Contatos
