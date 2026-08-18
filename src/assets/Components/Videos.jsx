import React from 'react'
import Title from './Title.jsx'
import Iframe from './Iframe.jsx'
import { useTranslation } from 'react-i18next'
import videos from '../Data/videos.js'

const Videos = () => {
  const { t } = useTranslation()

  return (
    <>
      <div
        id="videos"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text={t("video.title")}
          size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 xl:gap-x-16">
          {videos.map((video, index) => (
            <Iframe
              key={index}
              src={video.src}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Videos
