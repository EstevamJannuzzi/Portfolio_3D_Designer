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

  // ✅ Simplificação: array com todos os contatos
  const contacts = [
    { icon: <FaWhatsapp size={70} />, text: t("contacts.whatsapp"), link: "https://wa.me/5511952029128" },
    { icon: <HiOutlineMail size={70} />, text: t("contacts.email"), link: "mailto:estevamjannuzzi@gmail.com" },
    { icon: <FaInstagram size={70} />, text: t("contacts.instagram"), link: "https://www.instagram.com/estevam_jannuzzi/" },
    { icon: <PiLinkedinLogo size={70} />, text: t("contacts.linkedin"), link: "https://www.linkedin.com/in/estevam-jannuzzi-217355bb/" },
    { icon: <FiYoutube size={70} />, text: t("contacts.youtube"), link: "https://www.youtube.com/@vfx_3D_world" },
    { icon: <FaArtstation size={70} />, text: t("contacts.artstation"), link: "https://www.artstation.com/estevamjannuzzi4" },
    { icon: <VscGithub size={70} />, text: t("contacts.github"), link: "https://github.com/EstevamJannuzzi" },
  ]

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("contacts.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <Title
          text={t("contacts.subtitle")}
          size="text-[17px] sm:text-[22px] lg:text-[28px] xl:text-[36px]"
          color="text-white"
          darkcolor="dark:text-white"
        />
      </div>

      <div className="relative flex justify-center items-center mt-8">
        <div className="grid grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <BoxContent
              key={index}
              icon={contact.icon}
              text={contact.text}
              link={contact.link}
            />
          ))}
        </div>
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
