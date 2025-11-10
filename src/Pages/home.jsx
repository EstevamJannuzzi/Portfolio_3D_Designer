import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxText from '../assets/Components/BoxText.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Title
                    text={t("home.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
                <Title
                    text={t("home.name")}
                    size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[66px]"
                    color="text-white"
                    darkcolor="dark:text-white"
                />
            </div>

            <div className="relative flex flex-col items-center justify-center gap-6 mt-20 mb-8 ml-0 sm:ml-14 lg:ml-26 xl:ml-14">
                <BoxText
                    text={t("home.professionalSummary")}
                    width="max-w-40 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="mb-4 sm:-mb-10 lg:mb-0 xl:-mb-24 mr-40 sm:mr-70 lg:mr-90 xl:mr-120"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
                <Image
                    src='/DingBo.1.webp'
                    alt="DingBo"
                    width='w-[230px] sm:w-[340px] lg:w-[400px] xl:w-[700px]'
                    margin='ml-22 sm:ml-30 lg:ml-30 xl:ml-60 -mt-50 sm:-mt-50 lg:-mt-50 xl:-mt-30'
                    distance='z-10 relative'
                />
            </div>

            <div className='flex flex-col items-center justify-center gap-6 mb-12 mt-22'>
                <Image
                    src='/carnivor.1.webp'
                    alt="Carnivor"
                    width='w-[230px] sm:w-[340px] lg:w-[400px] xl:w-[700px]'
                    margin='-ml-22 sm:-ml-50 lg:-ml-50 xl:mr-20'
                    distance='z-10 relative'
                />
                <BoxText
                    text={t("home.experience")}
                    width="max-w-46 sm:max-w-80 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    position='right'
                    margin="-mt-72 sm:-mt-90 lg:-mt-110 xl:-mt-150 ml-30 sm:ml-50 lg:ml-80 xl:ml-140"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
            </div>

            <div className="relative flex flex-col items-center justify-center gap-6 mt-16 mb-8 ml-0 sm:ml-14 lg:ml-26 xl:ml-18">
                <BoxText
                    text={t("home.techSkills")}
                    width="max-w-40 sm:max-w-60 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    margin="-mb-8 sm:-mb-20 lg:-mb-20 xl:-mb-24 mr-30 sm:mr-70 lg:mr-90 xl:mr-144"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
                <Image
                    src='/Gremlin.1.webp'
                    alt="Gremlin"
                    width='w-[230px] sm:w-[350px] lg:w-[460px] xl:w-[700px]'
                    margin='ml-22 sm:ml-30 lg:ml-30 xl:ml-30 -mt-50'
                    distance='z-10 relative'
                />
            </div>

            <div className='flex flex-col items-center justify-center gap-6 mb-4 mt-22'>
                <Image
                    src='/Joystick.webp'
                    alt="Joystick"
                    width='w-[190px] sm:w-[320px] lg:w-[420px] xl:w-[660px]'
                    margin='-ml-14 sm:-ml-30 lg:-ml-40 xl:mr-30'
                    distance='z-10 relative'
                />
                <BoxText
                    text={t("home.goals")}
                    width="max-w-40 sm:max-w-80 lg:max-w-80 xl:max-w-90"
                    distance="z-20 relative"
                    position='right'
                    margin="-mt-60 sm:-mt-80 lg:-mt-106 xl:-mt-150 ml-30 sm:ml-50 lg:ml-94 xl:ml-130"
                    size="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px]"
                />
            </div>
        </DefaultScreen>
    )
}

export default Home
