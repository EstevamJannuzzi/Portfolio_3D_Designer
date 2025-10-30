import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import DingBo from '../assets/images/DingBo.1.webp'

const Home = () => {
    return (
        <DefaultScreen className='z-30'>
            <div>
                <h1 className="text-4xl font-bold text-orange dark:text-green mb-12">
                    Bem-vindo ao Portfólio de <br /> <span className='xl:text-[45px] text-primary'>Estevam Jannuzzi</span>
                </h1>
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-row xl:flex-row items-center justify-center gap-6'>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray bg-white dark:bg-dark-gray rounded-lg p-4 w-[400px]">Designer 3D  Especialista em Visualização Digital  Domínio em Maya, ZBrush, Photoshop, KeyShot e After Effect
                </p>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray bg-white dark:bg-dark-gray rounded-lg p-4 w-[400px]">
                    Sou formado em Design Gráfico desde 2011, com mais de uma década de experiência em criação visual e modelagem 3D. Tenho domínio técnico em Maya, ZBrush, Photoshop, KeyShot e After Effects — ferramentas que utilizo para transformar ideias em imagens impactantes, seja em projetos de produto, animação, visualização arquitetônica ou motion design.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-row xl:flex-row items-center justify-center gap-6'>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray bg-white dark:bg-dark-gray rounded-lg p-4 w-[400px]">
                    Além do design, sou entusiasta de tecnologia e programação, com foco em React JS e Python. Essa combinação me permite integrar arte e lógica, criando soluções visuais interativas e funcionais.
                </p>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray bg-white dark:bg-dark-gray rounded-lg p-4 w-[400px]">
                    Busco oportunidades em design 3D, tech art, visualização digital e projetos que valorizem criatividade, técnica e inovação. Vamos nos conectar?
                </p>
            </div>
            <div>
                <img src={DingBo} alt="DingBo" className='flex justify-center items-center w-[380px] sm:w-[500px] lg:w-[600px] xl:w-[800px]' />
            </div>
        </DefaultScreen>
    )
}

export default Home
