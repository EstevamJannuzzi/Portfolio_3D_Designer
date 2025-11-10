import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import BoxContent from '../assets/Components/BoxContent.jsx'
import Image from '../assets/Components/Image.jsx'
import { LiaFileVideoSolid } from "react-icons/lia"
import { FaRegImage } from "react-icons/fa6"
import { CgWebsite } from "react-icons/cg"
import { FiYoutube } from "react-icons/fi"
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("portfolio.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
      </div>
      <div className="flex flex-inline items-center justify-center gap-4 mt-16 mb-6">

        <BoxContent
          icon={<LiaFileVideoSolid size={70} />}
          target="_self"
          text={t("portfolio.video")}
          link="/video"
        />

        <BoxContent
          icon={<FaRegImage size={70} />}
          target="_self"
          text={t("portfolio.image")}
          link="/imagens"
        />
      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">
        <BoxContent
          icon={<CgWebsite size={70} />}
          target="_self"
          text={t("portfolio.site")}
          link="/websites"
        />
        <BoxContent
          icon={<FiYoutube size={70} />}
          target="_self"
          text={t("portfolio.channel")}
          link="/canais"
        />
      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">

        <Image
          src='/BBB.8.webp'
          alt="Contatos Ding"
          width="w-[300px] sm:w-[420px] lg:w-[460px] xl:w-[700px]"
          special='block dark:hidden'
        />
        <Image
          src='/BBB.8_green.webp'
          alt="Contatos Ding"
          width="w-[300px] sm:w-[420px] lg:w-[460px] xl:w-[700px]"
          special='hidden dark:block'
        />

      </div>
    </DefaultScreen>
  )
}

export default Portfolio
