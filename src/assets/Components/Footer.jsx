import React from 'react'
import { PiLinkedinLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaArtstation, FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full h-[110px] sm:h-[50px] lg:h-[60px] xl:h-[60px] font-text bg-dark-gray/75 dark:bg-primary/20 backdrop-blur-md fixed bottom-0 left-0 px-14 pt-2 sm:pt-0 xl:pt-0 pb-6 sm:pb-0 xl:pb-0 z-50'>
      <span className='text-center md:text-left text-[13px] sm:text-[16px]'>
        {new Date().getFullYear()} {t("footer.madeBy")}&copy;. {t("footer.rightsReserved")}
      </span>
      <div className='flex gap-4 mt-2 md:mt-0 md:ml-auto'>
        <a href='https://www.linkedin.com/in/estevam-jannuzzi-217355bb/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-orange dark:hover:text-green'>
          <PiLinkedinLogo size={24} />
        </a>
        <a href='https://www.youtube.com/@vfx_3D_world' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-orange dark:hover:text-green'>
          <FiYoutube size={24} />
        </a>
        <a href='https://www.artstation.com/estevamjannuzzi4' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-orange dark:hover:text-green'>
          <FaArtstation size={24} />
        </a>
        <a href='https://github.com/EstevamJannuzzi' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-orange dark:hover:text-green'>
          <VscGithub size={24} />
        </a>
        <a href='https://www.instagram.com/estevam_jannuzzi/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-orange dark:hover:text-green'>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer
