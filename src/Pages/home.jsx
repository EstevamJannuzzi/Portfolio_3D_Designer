import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import DingBo from '../assets/images/DingBo.1.webp'
import Carnivor from '../assets/images/carnivor.1.webp'
import BoxText from '../assets/Components/BoxText.jsx'
import Title from '../assets/Components/Title.jsx'
import { Car } from 'lucide-react'

const Home = () => {
    return (
        <DefaultScreen className='z-30'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Title
                    text="Bem-vindo ao Portfólio de"
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
                <Title
                    text="Estevam Jannuzzi"
                    size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[66px]"
                    color="text-white"
                    darkcolor="dark:text-white"
                />
            </div>
            <div className="relative flex flex-col items-center justify-center gap-6 mt-20 mb-8 ml-0 sm:ml-14 lg:ml-26 xl:ml-14">
                <BoxText
                    text="Designer 3D  Especialista em Visualização Digital  Domínio em Maya, ZBrush, Photoshop, KeyShot e Substance 3D Painter"
                    width="max-w-50 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="mb-18 sm:mb-4 lg:mb-0 xl:-mb-16 mr-30 sm:mr-70 lg:mr-90 xl:mr-100"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
                <img
                    src={DingBo}
                    alt="DingBo"
                    className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] xl:w-[900px] ml-22 sm:ml-0 lg:ml-0 xl:ml-0 -mt-50 z-10 relative"
                />
            </div>
            <div className='flex flex-col items-center justify-center gap-6 mb-12 mt-22'>
                <img
                    src={Carnivor}
                    alt="Carnivor"
                    className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] xl:w-[900px] -ml-14 sm:ml-0 lg:-ml-20 xl:ml-0 z-10 relative"
                />
                <BoxText
                    text="Sou formado em Design Gráfico desde 2011, com mais de uma década de experiência em criação visual e modelagem 3D. Tenho domínio técnico em Maya, ZBrush, Photoshop, KeyShot e Substance 3D Painter — ferramentas que utilizo para transformar ideias em imagens impactantes, seja em projetos de produto, animação, visualização arquitetônica ou motion design."
                    width="max-w-60 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="-mt-20 sm:-mt-80 lg:-mt-100 xl:-mt-126 ml-30 sm:ml-60 lg:ml-70 xl:ml-120"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />   
            </div>
            <div className='flex flex-col items-center justify-center gap-6 mb-12'>
                <BoxText
                    text="Além do design, sou entusiasta de tecnologia e programação, com foco em React JS e Python. Essa combinação me permite integrar arte e lógica, criando soluções visuais interativas e funcionais."
                    width="max-w-60 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="mb-24 sm:mb-4 lg:mb-0 xl:mb-0 mr-30 sm:mr-70 lg:mr-90 xl:mr-100"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
                <BoxText
                    text="Busco oportunidades em design 3D, tech art, visualização digital e projetos que valorizem criatividade, técnica e inovação. Vamos nos conectar?"
                    width="max-w-60 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="mb-24 sm:mb-4 lg:mb-0 xl:mb-0 mr-30 sm:mr-70 lg:mr-90 xl:mr-100"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
            </div>
        </DefaultScreen>
    )
}

export default Home
