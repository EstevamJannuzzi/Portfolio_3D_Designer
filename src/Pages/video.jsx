import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Iframe from '../assets/Components/Iframe.jsx'

const Video = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className="z-30 relative">
            {/* Botão superior */}
            <div className="mb-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>

            {/* Título */}
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Title
                    text={t("video.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            {/* Vídeo responsivo com fullscreen funcional */}
            <div className="relative flex justify-center items-center mt-8">
                <div className="relative flex flex-col gap-y-8">
                    <Iframe
                        src="https://www.youtube.com/embed/QmksXw9t8B0"
                        title="Demoreel"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />
                    
                    <Iframe
                        src="https://www.youtube.com/embed/AJsSvmtwu8g"
                        title="Robo Ding-Bo"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/InYdBfEyyPo"
                        title="Holograma de Robo Ding-Bo"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/l6SQPSMrDXY"
                        title="Carnivorous plant"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/bNj46Fk3N6Y"
                        title="Camaleão 3D"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />
                    
                    <Iframe
                        src="https://www.youtube.com/embed/xbXo2JazXsU"
                        title="DR BRAINY TEAM"
                        width='w-[90vw] sm:w-[640px] md:w-[768px] lg:w-[850px] xl:w-[900px]'
                        height='h-[50vw] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]'
                    />

                </div>
            </div>


            {/* Botão inferior, garantido que não bloqueia o vídeo */}
            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen>

    )
}

export default Video
