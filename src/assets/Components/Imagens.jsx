import React, { useState, useEffect } from 'react'
import Title from './Title.jsx'
import Image from './Image.jsx'
import { useTranslation } from 'react-i18next'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import images from '../Data/imagens.js'

const Imagens = () => {
  const { t } = useTranslation()
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedIndex])

  const nextImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div
        id='images'
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text={t("image.title")}
          size="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
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
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}

export default Imagens
