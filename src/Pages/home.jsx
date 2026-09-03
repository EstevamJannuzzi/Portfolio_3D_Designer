import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxText from '../assets/Components/BoxText.jsx'
import Title from '../assets/Components/Title.jsx'

const Home = () => {
    const base = "/Portfolio_3D_Designer"

    return (
        <DefaultScreen className='z-30'>

            <div className='flex flex-col items-center justify-center gap-2'>
                <Title
                    text="Bem-vindo ao Portfólio de"
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[50px]"
                />
                <Title
                    text="Estevam Jannuzzi"
                    size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[56px]"
                    color="text-white"
                />
            </div>

            <div className="fixed -rotate-44 top-40 sm:top-24 lg:top-46 xl:top-40 -right-13 sm:-right-18 lg:-right-22 xl:-right-34">
                <Image
                    src={`${base}/pics/Gremlin1080_Final.webp`}
                    alt="Gremlin"
                    width='w-[150px] sm:w-[210px] lg:w-[220px] xl:w-[390px]'
                    margin='m-0'
                    special='block fill-white drop-shadow-xl/50'
                />
            </div>

            {/* BLOCO 1 */}
            <div className="relative flex flex-col items-center justify-center gap-6 mt-20 mb-8 ml-0 sm:ml-14 lg:ml-26 xl:ml-14">
                <BoxText
                    text="Designer 3D  Especialista em Visualização Digital  Domínio em Maya, ZBrush, Photoshop, KeyShot e Substance 3D Painter."
                    width="max-w-40 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="mb-4 sm:-mb-10 lg:mb-0 xl:-mb-24 mr-40 sm:mr-70 lg:mr-90 xl:mr-120"
                    size="text-[12px] sm:text-[18px]"
                />
                <Image
                    src={`${base}/pics/dingbo.webp`}
                    alt="DingBo"
                    width='w-[230px] sm:w-[340px] lg:w-[400px] xl:w-[420px]'
                    margin='ml-28 sm:ml-30 lg:ml-30 xl:ml-60 -mt-50 sm:-mt-50 lg:-mt-40 xl:-mt-20'
                    distance='z-10 relative'
                    special='block'
                />
            </div>

            {/* BLOCO 2 */}
            <div className='flex flex-col items-center justify-center gap-6 mb-12 mt-28 sm:mt-22'>
                <Image
                    src={`${base}/pics/carnivor.webp`}
                    alt="Carnivor"
                    width='w-[230px] sm:w-[340px] lg:w-[400px] xl:w-[480px]'
                    margin='-ml-34 sm:-ml-50 lg:-ml-50 xl:mr-20'
                    distance='z-10 relative'
                    special='block'
                />
                <BoxText
                    text="Sou formado em Design Gráfico desde 2011, com mais de uma década de experiência em criação visual e modelagem 3D. Tenho domínio técnico em Maya, ZBrush, Photoshop, KeyShot e Substance 3D Painter, ferramentas que utilizo para transformar ideias em imagens impactantes, seja em projetos de produto, animação, visualização arquitetônica ou motion design."
                    width="max-w-46 sm:max-w-80 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    position='right'
                    margin="-mt-72 sm:-mt-90 lg:-mt-110 xl:-mt-130 ml-30 sm:ml-50 lg:ml-80 xl:ml-100"
                    size="text-[12px] sm:text-[18px]"
                />
            </div>

            {/* BLOCO 3 */}
            <div className="relative flex flex-col items-center justify-center gap-6 mt-8 sm:mt-16 mb-8 ml-0 sm:ml-14 lg:ml-26 xl:ml-18">
                <BoxText
                    text="Além do design, sou entusiasta de tecnologia e programação, com foco em React JS e Python. Essa combinação me permite integrar arte e lógica, criando soluções visuais interativas e funcionais."
                    width="max-w-40 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="-mb-8 sm:-mb-20 lg:-mb-20 xl:-mb-24 mr-30 sm:mr-70 lg:mr-90 xl:mr-144"
                    size="text-[12px] sm:text-[18px]"
                />
                <Image
                    src={`${base}/pics/gremlin.webp`}
                    alt="Gremlin"
                    width='w-[230px] sm:w-[350px] lg:w-[460px] xl:w-[440px]'
                    margin='ml-32 sm:ml-30 lg:ml-30 xl:ml-30 -mt-60 sm:-mt-50'
                    distance='z-10 relative'
                    special='block'
                />
            </div>

            {/* BLOCO 4 */}
            <div className='flex flex-col items-center justify-center gap-6 mb-4 mt-30 sm:mt-8'>
                <Image
                    src={`${base}/pics/joystick.webp`}
                    alt="Joystick"
                    width='w-[190px] sm:w-[320px] lg:w-[420px] xl:w-[400px]'
                    margin='-ml-30 sm:-ml-30 lg:-ml-40 xl:mr-30'
                    distance='z-10 relative'
                    special='block'
                />
                <BoxText
                    text="Busco oportunidades em design 3D, tech art, visualização digital e projetos que valorizem criatividade, técnica e inovação. Vamos nos conectar?"
                    width="max-w-40 sm:max-w-80 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    position='right'
                    margin="-mt-60 sm:-mt-80 lg:-mt-106 xl:-mt-100 ml-30 sm:ml-50 lg:ml-94 xl:ml-100"
                    size="text-[12px] sm:text-[18px]"
                />
            </div>

        </DefaultScreen>
    )
}

export default Home
