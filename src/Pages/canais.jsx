import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'

const Canais = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className='-ml-28 sm:-ml-70 lg:-ml-110 xl:-ml-150 mt-4'>
                <BackButton to="/portfolio" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Title
                    text={t("channel.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>
            
            <div className='-ml-28 sm:-ml-70 lg:-ml-110 xl:-ml-150 mt-4'>
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen>
    )
}

export default Canais
