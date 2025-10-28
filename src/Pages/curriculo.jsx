import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'

const Curriculo = () => {
  return (
    <DefaultScreen>
      <h1 className="text-4xl font-bold text-orange mb-6">Currículo</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Aqui você pode encontrar informações sobre minha formação, experiências e habilidades.
      </p>
    </DefaultScreen>
  )
}

export default Curriculo
