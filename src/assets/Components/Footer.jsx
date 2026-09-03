import React from 'react'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full h-[90px] sm:h-[44px] lg:h-[54px] xl:h-[44px] font-text bg-primary fixed bottom-0 left-0 px-14 pt-2 sm:pt-0 pb-6 sm:pb-0 z-50'>
      <span className='text-center md:text-left text-[10px] sm:text-[14px]'>
        {new Date().getFullYear()} {t("footer.madeBy")}&copy;. {t("footer.rightsReserved")}
      </span>
      <div className='flex gap-4 mt-0 md:ml-auto'>
        <a href='https://www.linkedin.com/in/estevam-jannuzzi-217355bb/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-purple'>
          <PiLinkedinLogo size={24} />
        </a>
        <a href='https://github.com/EstevamJannuzzi' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-purple'>
          <VscGithub size={24} />
        </a>
        <a href='https://www.instagram.com/estevam_jannuzzi/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-purple'>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer
