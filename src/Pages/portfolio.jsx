import React from 'react'
import { HashLink } from 'react-router-hash-link'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BoxContent from '../assets/Components/BoxContent.jsx'
import Videos from '../assets/Components/Videos.jsx'
import Imagens from '../assets/Components/Imagens.jsx'
import Websites from '../assets/Components/Websites.jsx'
import Canais from '../assets/Components/Canais.jsx'
import Programacao from '../assets/Components/Programacao.jsx'


const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <DefaultScreen className='z-30'>

      {/* Título principal */}
      <div className='flex flex-col items-center justify-center gap-2 text-center mb-10'>
        <Title
          text={t("portfolio.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4 z-10'>
          <HashLink smooth to="/portfolio#videos">
            <BoxContent text={t("video.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
          <HashLink smooth to="/portfolio#images">
            <BoxContent text={t("image.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
          <HashLink smooth to="/portfolio#sites">
            <BoxContent text={t("site.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
          <HashLink smooth to="/portfolio#channels">
            <BoxContent text={t("channel.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
          <HashLink smooth to="/portfolio#programming">
            <BoxContent text={t("programming.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
        </div>
      </div>

      <Videos />
      <Imagens />
      <Websites />
      <Canais />
      <Programacao />


    </DefaultScreen>
  )
}

export default Portfolio
