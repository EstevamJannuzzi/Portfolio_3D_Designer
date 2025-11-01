import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import BoxContato from '../assets/Components/BoxContato.jsx'
import ContatosDing from '../assets/images/ContatosDing.webp'
import { FaWhatsapp, FaInstagram, FaArtstation } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { PiLinkedinLogo } from "react-icons/pi"
import { FiYoutube } from "react-icons/fi"
import { VscGithub } from "react-icons/vsc"

const Contatos = () => {
  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text="Contato"
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <Title
          text="Abaixo estão minhas formas de contato e redes sociais."
          size="text-[20px] sm:text-[22px] lg:text-[28px] xl:text-[36px]"
          color="text-white"
          darkcolor="dark:text-white"
        />
      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-16 mb-6">

        <BoxContato
          icon={<FaWhatsapp size={70} />}
          text="Whatsapp"
          link="https://wa.me/5511952029128"
        />

        <BoxContato
          icon={<HiOutlineMail size={70} />}
          text="E-mail"
          link="mailto:estevamjannuzzi@gmail.com"
        />
        <BoxContato
          icon={<FaInstagram size={70} />}
          text="Instagram"
          link="https://www.instagram.com/estevam_jannuzzi/"
        />

      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">

        <BoxContato
          icon={<PiLinkedinLogo size={70} />}
          text="LinkedIn"
          link="https://www.linkedin.com/in/estevam-jannuzzi-217355bb/"
        />

        <BoxContato
          icon={<FiYoutube size={70} />}
          text="YouTube"
          link="https://www.youtube.com/@vfx_3D_world"
        />
        <BoxContato
          icon={<FaArtstation size={70} />}
          text="ArtStation"
          link="https://www.artstation.com/estevamjannuzzi4"
        />

      </div>

      <div className="flex flex-inline items-center justify-center gap-4 mt-6 mb-6">

        <BoxContato
          icon={<VscGithub size={70} />}
          text="GitHub"
          link="https://github.com/EstevamJannuzzi"
        />

      </div>

      <div className="flex justify-center items-center mt-10 mb-8">
        <img
          src={ContatosDing}
          alt="Contatos Ding"
          className='w-[300px] sm:w-[420px] lg:w-[460px] xl:w-[700px]'
        />
      </div>
    </DefaultScreen>
  )
}

export default Contatos
