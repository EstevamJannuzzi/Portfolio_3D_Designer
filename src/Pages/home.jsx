import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen'

const Home = () => {
    return (
        <DefaultScreen>
            <h1 className="text-4xl font-bold text-orange dark:text-green mb-6">
                Bem-vindo ao meu Portfólio
            </h1>
            <p className="text-lg text-orange dark:text-green max-w-3xl mx-auto">
                Designer 3D especializado em criar experiências visuais únicas e impactantes.
            </p>
        </DefaultScreen>
    )
}

export default Home
