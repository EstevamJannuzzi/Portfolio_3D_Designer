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
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-x-16">
                    <Iframe
                        src="https://www.youtube.com/embed/QmksXw9t8B0"
                        title="Demoreel"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/AJsSvmtwu8g"
                        title="Robo Ding-Bo"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/InYdBfEyyPo"
                        title="Holograma de Robo Ding-Bo"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/l6SQPSMrDXY"
                        title="Carnivorous plant"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/bNj46Fk3N6Y"
                        title="Camaleão 3D"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/xbXo2JazXsU"
                        title="DR BRAINY TEAM"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/oVenlYP6yHk"
                        title="Na Mesa VideoGame Reliquia 2"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/l2zT0G_m63c"
                        title="The Jelly"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/LbN9OvJzTnA"
                        title="Little Shark"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/Rqfn1l8XViU"
                        title="Old 80 Toy"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/RAsFtOOBYwI"
                        title="Brinquedos Genius"
                    />

                    <Iframe
                        src="https://www.youtube.com/embed/lqbd8t6QA9M"
                        title="AIRPLANE CLOSER"
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
