import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'
import Link from '../assets/Components/Link.jsx'

const Programacao = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className="mb-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>

            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Title
                    text={t("programming.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            <div className="relative flex justify-center items-center mt-8">
                <div className="grid grid-cols-2 gap-6">
                    <div className='flex flex-col justify-center items-center mt-6'>
                        <Image
                            src='/tictactoe.webp'
                            alt='Game Jogo da Velha'
                            width='w-[160px] sm:w-[280px] lg:w-[340px] xl:w-[420px]'
                            margin='mb-4'
                        />
                        <Link
                            text={t("programming.text")}
                            link='/Programs/TicTacToe_v2.exe'
                            download={true}
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6'>
                        <Image
                            src='/Apostas.webp'
                            alt='Game Aposta'
                            width='w-[160px] sm:w-[280px] lg:w-[340px] xl:w-[420px]'
                            margin='mb-4'
                        />
                        <Link
                            text={t("programming.text_A")}
                            link='/Programs/Apostas.exe'
                            download={true}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen >
    )
}

export default Programacao
