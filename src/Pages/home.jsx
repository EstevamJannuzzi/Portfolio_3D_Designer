import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'

const Home = () => {
    return (
        <DefaultScreen className='z-30'>
            <div>
                <h1 className="text-4xl font-bold text-orange dark:text-green mb-6">
                    Bem-vindo ao Portfólio de <br /> <span className='xl:text-[45px] text-primary'>Estevam Jannuzzi</span>
                </h1>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">Designer 3D  Especialista em Visualização Digital  Domínio em Maya, ZBrush, Photoshop, KeyShot e After Effect
                </p>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
                    Sou formado em Design Gráfico desde 2011, com mais de uma década de experiência em criação visual e modelagem 3D. Tenho domínio técnico em Maya, ZBrush, Photoshop, KeyShot e After Effects — ferramentas que utilizo para transformar ideias em imagens impactantes, seja em projetos de produto, animação, visualização arquitetônica ou motion design.
                </p>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
                    Além do design, sou entusiasta de tecnologia e programação, com foco em React JS e Python. Essa combinação me permite integrar arte e lógica, criando soluções visuais interativas e funcionais.
                </p>
                <p className="font-text text-xl text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
                    Busco oportunidades em design 3D, tech art, visualização digital e projetos que valorizem criatividade, técnica e inovação. Vamos nos conectar?
                </p>
            </div>
        </DefaultScreen>
    )
}

export default Home
