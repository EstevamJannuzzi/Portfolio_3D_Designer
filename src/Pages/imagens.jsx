import React, { useState, useEffect } from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'

const Imagens = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

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
    '/imagespage/Atari2600_01.webp',
    '/imagespage/Atari2600_02.webp',
    '/imagespage/BBB10.webp',
    '/imagespage/BBB12.webp',
    '/imagespage/BBB14.webp',
    '/imagespage/BBB16.webp',
    '/imagespage/BBB18.webp',
    '/imagespage/BBB19.webp',
    '/imagespage/Brainy Self 1.webp',
    '/imagespage/Brainy Self 2.webp',
    '/imagespage/carnivor_1.webp',
    '/imagespage/carnivor_2.webp',
    '/imagespage/cartuchoMegaDrive03.webp',
    '/imagespage/cartuchoMegaDrive04.webp',
    '/imagespage/Cartuchos_Atari2600_01.webp',
    '/imagespage/Cartuchos_Atari2600_03.webp',
    '/imagespage/Chamaleon_Ladybug.webp',
    '/imagespage/control01.webp',
    '/imagespage/control03.webp',
    '/imagespage/ding-bo_Instagram.0.webp',
    '/imagespage/Ding-Bo.webp',
    '/imagespage/DingBo_OtherAmbient.webp',
    '/imagespage/dragonFly01.webp',
    '/imagespage/Frog01.webp',
    '/imagespage/Frog06.webp',
    '/imagespage/Genius01.webp',
    '/imagespage/Genius02.webp',
    '/imagespage/glass01_Final.webp',
    '/imagespage/glass03_Final.webp',
    '/imagespage/Gremlin1080_3_Final.webp',
    '/imagespage/Gremlin1080_4_Final.webp',
    '/imagespage/Gremlin1080_Final.webp',
    '/imagespage/Imagem01.webp',
    '/imagespage/JetBike_Yellow.webp',
    '/imagespage/JetBike01.webp',
    '/imagespage/JetBike03.webp',
    '/imagespage/lamp.1.webp',
    '/imagespage/Lamparina.webp',
    '/imagespage/Natal2023.webp',
    '/imagespage/Nature.webp',
    '/imagespage/Origami2.webp',
    '/imagespage/refriRender_Other.webp',
    '/imagespage/renderFinalRefri.webp',
    '/imagespage/Shark02.webp',
    '/imagespage/Shark03.webp'
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
