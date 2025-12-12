import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import Iframe from '../assets/Components/Iframe.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxContent from '../assets/Components/BoxContent.jsx'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"


const base = "/Portfolio_3D_Designer"

const Portfolio = () => {
  const { t } = useTranslation()

  // ✔️ Correto: índice da imagem selecionada
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Lista de vídeos
  const videos = [
    { src: "https://www.youtube.com/embed/QmksXw9t8B0", title: "Demoreel" },
    { src: "https://www.youtube.com/embed/AJsSvmtwu8g", title: "Robo Ding-Bo" },
    { src: "https://www.youtube.com/embed/InYdBfEyyPo", title: "Holograma de Robo Ding-Bo" },
    { src: "https://www.youtube.com/embed/l6SQPSMrDXY", title: "Carnivorous plant" },
    { src: "https://www.youtube.com/embed/bNj46Fk3N6Y", title: "Camaleão 3D" },
    { src: "https://www.youtube.com/embed/xbXo2JazXsU", title: "DR BRAINY TEAM" },
    { src: "https://www.youtube.com/embed/oVenlYP6yHk", title: "Na Mesa VideoGame Reliquia 2" },
    { src: "https://www.youtube.com/embed/l2zT0G_m63c", title: "The Jelly" },
    { src: "https://www.youtube.com/embed/LbN9OvJzTnA", title: "Little Shark" },
    { src: "https://www.youtube.com/embed/Rqfn1l8XViU", title: "Old 80 Toy" },
    { src: "https://www.youtube.com/embed/RAsFtOOBYwI", title: "Brinquedos Genius" },
    { src: "https://www.youtube.com/embed/lqbd8t6QA9M", title: "AIRPLANE CLOSER" }
  ]

  // Bloqueia scroll quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedIndex])

  // Lista de imagens
  const images = [
    `${base}/imagespage/Atari2600_01.webp`,
    `${base}/imagespage/Atari2600_02.webp`,
    `${base}/imagespage/BBB10.webp`,
    `${base}/imagespage/BBB12.webp`,
    `${base}/imagespage/BBB14.webp`,
    `${base}/imagespage/BBB16.webp`,
    `${base}/imagespage/BBB18.webp`,
    `${base}/imagespage/BBB19.webp`,
    `${base}/imagespage/Brainy_Self_1.webp`,
    `${base}/imagespage/Brainy_Self_2.webp`,
    `${base}/imagespage/carnivor_1.webp`,
    `${base}/imagespage/carnivor_2.webp`,
    `${base}/imagespage/cartuchoMegaDrive03.webp`,
    `${base}/imagespage/cartuchoMegaDrive04.webp`,
    `${base}/imagespage/Cartuchos_Atari2600_01.webp`,
    `${base}/imagespage/Cartuchos_Atari2600_03.webp`,
    `${base}/imagespage/Chamaleon_Ladybug.webp`,
    `${base}/imagespage/control01.webp`,
    `${base}/imagespage/control03.webp`,
    `${base}/imagespage/ding-bo_Instagram.0.webp`,
    `${base}/imagespage/Ding-Bo.webp`,
    `${base}/imagespage/DingBo_OtherAmbient.webp`,
    `${base}/imagespage/dragonFly01.webp`,
    `${base}/imagespage/Frog01.webp`,
    `${base}/imagespage/Frog06.webp`,
    `${base}/imagespage/Genius01.webp`,
    `${base}/imagespage/Genius02.webp`,
    `${base}/imagespage/glass01_Final.webp`,
    `${base}/imagespage/glass03_Final.webp`,
    `${base}/imagespage/Gremlin1080_3_Final.webp`,
    `${base}/imagespage/Gremlin1080_4_Final.webp`,
    `${base}/imagespage/Gremlin1080_Final.webp`,
    `${base}/imagespage/Imagem01.webp`,
    `${base}/imagespage/JetBike_Yellow.webp`,
    `${base}/imagespage/JetBike01.webp`,
    `${base}/imagespage/JetBike03.webp`,
    `${base}/imagespage/lamp_1.webp`,
    `${base}/imagespage/Lamparina.webp`,
    `${base}/imagespage/Natal2023.webp`,
    `${base}/imagespage/Nature.webp`,
    `${base}/imagespage/Origami2.webp`,
    `${base}/imagespage/refriRender_Other.webp`,
    `${base}/imagespage/renderFinalRefri.webp`,
    `${base}/imagespage/Shark02.webp`,
    `${base}/imagespage/Shark03.webp`
  ]

  // Botões de navegação
  const nextImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Jogos
  const games = [
    {
      id: 1,
      src: `${base}/tictactoe.webp`,
      alt: "Game Jogo da Velha",
      text: t("programming.text"),
      link: `${base}/Programs/TicTacToe_v2.exe`,
    },
    {
      id: 2,
      src: `${base}/Apostas.webp`,
      alt: "Game Aposta",
      text: t("programming.text_A"),
      link: `${base}/Programs/Apostas_V3.exe`,
    },
  ]

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
            <BoxContent text={t("channel.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]'/>
          </HashLink>
          <HashLink smooth to="/portfolio#programming">
            <BoxContent text={t("programming.title")} width='w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[130px]' />
          </HashLink>
        </div>
      </div>

      {/* Vídeos */}
      <div id="videos" className="flex flex-col items-center justify-center gap-2 text-center -mt-34">
        <Title text={t("video.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-40" />
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
        <Title text={t("image.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-40" />
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
      <div id='sites' className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title text={t("site.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-40" />
      </div>

      <div className='flex flex-col justify-center items-center mt-6 mb-10'>
        <Image
          src={`${base}/siteMentalPlus.webp`}
          alt='Site MentalPlus'
          width='w-[340px] sm:w-[580px] lg:w-[680px] xl:w-[780px]'
          margin='mb-4'
        />
        <BoxContent
          text={t("site.text")}
          link='https://www.mentalplus.app/'
          width='w-[220px] sm:w-[340px] lg:w-[420px] xl:w-[450px]'
        />
      </div>

      {/* Canais */}
      <div id='channels' className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("channel.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-40" />
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-10">
        <Image
          src={`${base}/canalSilvia.webp`}
          alt="Canal Silvia Eiko Artesanato"
          width="w-[340px] sm:w-[580px] lg:w-[680px] xl:w-[780px]"
          margin="mb-4"
        />
        <BoxContent
          text={t("channel.text")}
          link="https://www.youtube.com/@SilviaEikoArtesanato"
          width="w-[220px] sm:w-[340px] lg:w-[420px] xl:w-[550px]"
        />
      </div>

      {/* Programação */}
      <div id='programming' className="flex flex-col items-center justify-center gap-2 text-center">
        <Title text={t("programming.title")} size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-40" />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {games.map((game) => (
            <div key={game.id} className="flex flex-col justify-center items-center">
              <Image
                src={game.src}
                alt={game.alt}
                width="w-[160px] sm:w-[260px] lg:w-[320px] xl:w-[380px]"
                margin="mb-4"
              />
              <BoxContent
                text={game.text}
                link={game.link}
                download={true}
                width="w-[160px] sm:w-[260px] lg:w-[300px] xl:w-[350px]"
              />
            </div>
          ))}
        </div>
      </div>

    </DefaultScreen>
  )
}

export default Portfolio
