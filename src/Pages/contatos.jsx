import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Button from '../assets/Components/Button.jsx'
import Image from '../assets/Components/Image.jsx'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { useTranslation } from 'react-i18next'

const Contatos = () => {
  const { t } = useTranslation()

  const base = "/Portfolio_3D_Designer"

  const contacts = [
    { icon: <FaWhatsapp size={70} />, text: t("contacts.whatsapp"), link: "https://wa.me/5511952029128?text=Olá! Como posso te ajudar?" },
  ]

  const handleButtonClick = (link) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link
    } else {
      window.open(link, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <DefaultScreen className='z-30'>

      {/* Títulos */}
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("contacts.title")}
          size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[60px]"
        />

        <Title
          text={t("contacts.subtitle")}
          size="text-[17px] sm:text-[22px] lg:text-[28px] xl:text-[36px]"
          color="text-blue-iris"
          darkcolor="dark:text-white"
        />
      </div>

      {/* Grid de contatos */}
      <div className="relative flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 gap-4">
          {contacts.map((contact, index) => (
            <Button
              key={index}
              icon={contact.icon}
              text={contact.text}
              onClick={() => handleButtonClick(contact.link)}
            />
          ))}
        </div>
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center items-center mt-10 mb-8">
        <Image
          src={`${base}/ContatosDing.webp`}
          alt="Contatos Ding"
          width="w-[300px] sm:w-[420px] lg:w-[460px] xl:w-[480px]"
        />
      </div>

    </DefaultScreen>
  )
}

export default Contatos
