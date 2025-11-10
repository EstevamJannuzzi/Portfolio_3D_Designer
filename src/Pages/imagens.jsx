import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'

const Imagens = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className="mb-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Title
                    text={t("image.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen>
    )
}

export default Imagens
