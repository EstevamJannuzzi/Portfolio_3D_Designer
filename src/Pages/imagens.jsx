import React, { useState, useEffect } from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'

const Imagens = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  // Caminho base para GitHub Pages
  const base = "/Portfolio_3D_Designer"

  // 🔒 Bloqueia scroll da página quando a imagem está ampliada
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

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

  return (
    <DefaultScreen className={`z-30 ${selectedImage ? 'pointer-events-none' : ''}`}>
      <div className="mb-8 flex justify-center relative z-20">
        <BackButton to="/portfolio" />
      </div>

      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("image.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
      </div>

      <div className="relative flex justify-center items-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(src)}
              className="transition-transform hover:scale-105"
            >
              <Image
                src={src}
                width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal para imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999] cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}

      <div className="mt-8 flex justify-center relative z-20">
        <BackButton to="/portfolio" />
      </div>
    </DefaultScreen>
  )
}

export default Imagens
