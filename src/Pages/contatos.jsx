import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import BoxContent from '../assets/Components/BoxContent.jsx'
import Image from '../assets/Components/Image.jsx'
import { FaWhatsapp, FaInstagram, FaArtstation } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { PiLinkedinLogo } from "react-icons/pi"
import { FiYoutube } from "react-icons/fi"
import { VscGithub } from "react-icons/vsc"
import { useTranslation } from 'react-i18next'

const Contatos = () => {
  const { t } = useTranslation()

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("contacts.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <Title
          text={t("contacts.subtitle")}
          size="text-[20px] sm:text-[22px] lg:text-[28px] xl:text-[36px]"
          color="text-white"
          darkcolor="dark:text-white"
        />
      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-16 mb-6">

        <BoxContent
          icon={<FaWhatsapp size={70} />}
          text={t("contacts.whatsapp")}
          link="https://wa.me/5511952029128"
        />

        <BoxContent
          icon={<HiOutlineMail size={70} />}
          text={t("contacts.email")}
          link="mailto:estevamjannuzzi@gmail.com"
        />

        <BoxContent
          icon={<FaInstagram size={70} />}
          text={t("contacts.instagram")}
          link="https://www.instagram.com/estevam_jannuzzi/"
        />

      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">

        <BoxContent
          icon={<PiLinkedinLogo size={70} />}
          text={t("contacts.linkedin")}
          link="https://www.linkedin.com/in/estevam-jannuzzi-217355bb/"
        />

        <BoxContent
          icon={<FiYoutube size={70} />}
          text={t("contacts.youtube")}
          link="https://www.youtube.com/@vfx_3D_world"
        />

        <BoxContent
          icon={<FaArtstation size={70} />}
          text={t("contacts.artstation")}
          link="https://www.artstation.com/estevamjannuzzi4"
        />

      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">

        <BoxContent
          icon={<VscGithub size={70} />}
          text={t("contacts.github")}
          link="https://github.com/EstevamJannuzzi"
        />

      </div>

      <div className="flex justify-center items-center mt-10 mb-8">
        <Image
          src='/ContatosDing.webp'
          alt="Contatos Ding"
          width="w-[300px] sm:w-[420px] lg:w-[460px] xl:w-[700px]"
        />
      </div>
    </DefaultScreen>
  )
}

export default Contatos
