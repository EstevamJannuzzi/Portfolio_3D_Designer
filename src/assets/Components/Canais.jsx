import React from 'react'
import Title from './Title.jsx'
import Image from './Image.jsx'
import BoxContent from './BoxContent.jsx'
import { useTranslation } from 'react-i18next'
import canais from '../Data/canais.js'

const Canais = () => {
  const { t } = useTranslation()

  return (
    <>
      <div
        id="channels"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text={t("channel.title")}
          size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
      </div>

      <div className="relative flex justify-center items-center mt-6 mb-10">
        
          {canais.map((canal) => (
            <div
              key={canal.id}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={canal.src}
                alt={canal.alt}
                width="w-[320px] sm:w-[240px] lg:w-[300px] xl:w-[380px]"
                margin="mb-4"
              />

              <BoxContent
                text={t(canal.textKey)}
                link={canal.link}
                width="w-[190px] sm:w-[200px] lg:w-[240px] xl:w-[300px]"
              />
            </div>
          ))}
        
      </div>
    </>
  )
}

export default Canais
