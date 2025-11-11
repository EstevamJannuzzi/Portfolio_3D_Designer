import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'
import Link from '../assets/Components/Link.jsx'

const Canais = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className="mb-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
            
            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Title
                    text={t("channel.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            <div className='flex flex-col justify-center items-center mt-6'>
                <Image
                    src='/canalSilvia.webp'
                    alt='Canal SilviaEikoArtesanato'
                    width='w-[340px] sm:w-[580px] lg:w-[680px] xl:w-[780px]'
                    margin='mb-4'
                />
                <Link
                    text={t("channel.text")}
                    link='https://www.youtube.com/@SilviaEikoArtesanato'
                />
            </div>

            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen>
    )
}

export default Canais
