import React, { useState, useEffect } from 'react'
import Title from './Title.jsx'
import Image from './Image.jsx'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import images from '../Data/imagens.js'

const Imagens = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedIndex])

  useEffect(() => {
    setIsZoomed(false)
    setZoomPosition({ x: 50, y: 50 })
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
          text="Imagens"
          size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
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
            className="absolute left-6 z-10 text-white hover:text-purple px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
          >
            <MdNavigateBefore size={50} />
          </button>

          {/* Imagem */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl cursor-zoom-in"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => {
              setIsZoomed(false)
              setZoomPosition({ x: 50, y: 50 })
            }}
            onMouseMove={(e) => {
              const bounds = e.currentTarget.getBoundingClientRect()
              setZoomPosition({
                x: ((e.clientX - bounds.left) / bounds.width) * 100,
                y: ((e.clientY - bounds.top) / bounds.height) * 100,
              })
            }}
          >
            <img
              src={images[selectedIndex]}
              alt="Imagem ampliada"
              className="block max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-150"
              style={{
                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>

          {/* Próximo */}
          <button
            onClick={nextImage}
            className="absolute right-6 z-10 text-white hover:text-purple px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
          >
            <MdNavigateNext size={50} />
          </button>

          {/* Fechar */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-purple cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}

export default Imagens
