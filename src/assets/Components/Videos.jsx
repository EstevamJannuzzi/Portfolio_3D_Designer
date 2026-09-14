import Title from './Title.jsx'
import Iframe from './Iframe.jsx'
import videos from '../Data/videos.js'

const Videos = () => {
  return (
    <>
      <div
        id="videos"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text="Vídeos"
          size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
      </div>

      <div className="relative mt-8 mb-10 px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {videos.map((video, index) => (
            <Iframe
              key={index}
              src={video.src}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Videos
