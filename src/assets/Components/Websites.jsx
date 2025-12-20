import React from 'react'
import Title from './Title.jsx'
import Image from './Image.jsx'
import BoxContent from './BoxContent.jsx'
import { useTranslation } from 'react-i18next'
import websites from '../Data/websites.js'

const Websites = () => {
  const { t } = useTranslation()

  return (
    <>
      <div
        id="sites"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text={t("site.title")}
          size="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[60px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
      </div>

      <div className="relative flex justify-center items-center mt-6 mb-10">
        
          {websites.map((site) => (
            <div
              key={site.id}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={site.src}
                alt={site.alt}
                width="w-[320px] sm:w-[240px] lg:w-[300px] xl:w-[380px]"
                margin="mb-4"
              />

              <BoxContent
                text={t(site.textKey)}
                link={site.link}
                width="w-[190px] sm:w-[200px] lg:w-[240px] xl:w-[300px]"
              />
            </div>
          ))}
        </div>
      
    </>
  )
}

export default Websites
