import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxContent from '../assets/Components/BoxContent.jsx'

const Programacao = () => {
    const { t } = useTranslation()

    // Caminho base para GitHub Pages (somente para arquivos estáticos)
    const base = "/Portfolio_3D_Designer"

    // Lista de jogos reutilizável
    const games = [
        {
            id: 1,
            src: `${base}/imagespage/tictactoe.webp`,
            alt: "Game Jogo da Velha",
            text: t("programming.text"),
            link: `${base}/Programs/TicTacToe_v2.exe`,
        },
        {
            id: 2,
            src: `${base}/imagespage/Apostas.webp`,
            alt: "Game Aposta",
            text: t("programming.text_A"),
            link: `${base}/Programs/Apostas_V3.exe`,
        },
    ]

    return (
        <DefaultScreen className="z-30">

            {/* Botão superior */}
            <div className="mb-8 flex justify-center relative z-20">
                {/* HashRouter → caminhos sem base */}
                <BackButton to="/portfolio" />
            </div>

            {/* Título */}
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Title
                    text={t("programming.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            {/* Conteúdo principal */}
            <div className="relative flex justify-center items-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="flex flex-col justify-center items-center"
                        >
                            <Image
                                src={game.src}
                                alt={game.alt}
                                width="w-[160px] sm:w-[260px] lg:w-[320px] xl:w-[380px]"
                                margin="mb-4"
                            />

                            <BoxContent
                                text={game.text}
                                link={game.link}
                                download={true}
                                width="w-[160px] sm:w-[260px] lg:w-[300px] xl:w-[350px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botão inferior */}
            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>

        </DefaultScreen>
    )
}

export default Programacao
