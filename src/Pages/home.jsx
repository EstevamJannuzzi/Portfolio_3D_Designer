import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'

const Home = () => {
    return (
        <DefaultScreen className='z-30'>
            <div>
                <h1 className="text-4xl font-bold text-orange dark:text-green mb-6">
                    Bem-vindo ao Portfólio de <br /> <span className='xl:text-[45px] text-primary'>Estevam Jannuzzi</span>
                </h1>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
                    Designer 3D especializado em criar experiências visuais únicas e impactantes.
                </p>
            </div>
        </DefaultScreen>
    )
}

export default Home
