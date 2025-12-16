import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import Iframe from '../assets/Components/Iframe.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxContent from '../assets/Components/BoxContent.jsx'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import videos from '../assets/Data/videos.js'
import images from '../assets/Data/imagens.js'
import programacaos from '../assets/Data/programacaos.js'

const base = "/Portfolio_3D_Designer"

const Portfolio = () => {
  const { t } = useTranslation()

  // ✔️ Correto: índice da imagem selecionada
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Bloqueia scroll quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedIndex])

  // Botões de navegação
  const nextImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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

      {/* Vídeos */}
      <div id="videos" className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("video.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40" />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 xl:gap-x-16">
          {videos.map((video, index) => (
            <Iframe key={index} src={video.src} title={video.title} />
          ))}
        </div>
      </div>

      {/* Imagens */}
      <div id='images' className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("image.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40" />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="transition-transform hover:scale-105 cursor-pointer"
            >
              <Image src={src} />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] cursor-zoom-out"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Anterior */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
          >
            <MdNavigateBefore size={50} />
          </button>

          {/* Imagem */}
          <img
            src={images[selectedIndex]}
            alt="Imagem ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />

          {/* Próximo */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
          >
            <MdNavigateNext size={50} />
          </button>

          {/* Fechar */}
          <button
            onClick={e => { e.stopPropagation(); setSelectedIndex(null) }}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}


      {/* Websites */}
      <div id='sites' className='flex flex-col items-center justify-center gap-2 text-cente'>
        <Title text={t("site.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40" />
      </div>

      <div className='flex flex-col justify-center items-center mt-6 mb-10'>
        <Image
          src={`${base}/siteMentalPlus.webp`}
          alt='Site MentalPlus'
          width='w-[320px] sm:w-[240px] lg:w-[300px] xl:w-[380px]'
          margin='mb-4'
        />
        <BoxContent
          text={t("site.text")}
          link='https://www.mentalplus.app/'
          width='w-[190px] sm:w-[200px] lg:w-[240px] xl:w-[300px]'
        />
      </div>


      {/* Canais */}
      <div id='channels' className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("channel.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40" />
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-10">
        <Image
          src={`${base}/canalSilvia.webp`}
          alt="Canal Silvia Eiko Artesanato"
          width="w-[320px] sm:w-[240px] lg:w-[300px] xl:w-[380px]"
          margin="mb-4"
        />
        <BoxContent
          text={t("channel.text")}
          link="https://www.youtube.com/@SilviaEikoArtesanato"
          width="w-[190px] sm:w-[200px] lg:w-[240px] xl:w-[300px]"
        />
      </div>


      {/* Programação */}
      <div id='programming' className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("programming.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40" />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {programacaos.map((programacao) => (
            <div key={programacao.id} className="flex flex-col justify-center items-center">
              <Image
                src={programacao.src}
                alt={programacao.alt}
                width="w-[160px] sm:w-[140px] lg:w-[180px] xl:w-[240px]"
                margin="mb-4"
              />
              <BoxContent
                text={t(programacao.textKey)}
                link={programacao.link}
                download={true}
                width="w-[160px] sm:w-[140px] lg:w-[170px] xl:w-[240px]"
              />
            </div>
          ))}

        </div>
      </div>

    </DefaultScreen>
  )
}

export default Portfolio
