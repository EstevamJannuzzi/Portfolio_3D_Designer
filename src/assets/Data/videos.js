const videoPath = (filename) => `${import.meta.env.BASE_URL}videos/${filename}`

const videos = [
  { src: videoPath("demoreel.mp4") },
  { src: videoPath("robot.mp4") },
  { src: videoPath("holograma.mp4") },
  { src: videoPath("carnivorous.mp4") },
  { src: videoPath("chamaleon.mp4") },
  { src: videoPath("brainy.mp4") },
  { src: videoPath("video_game.mp4") },
  { src: videoPath("jelly.mp4") },
  { src: videoPath("shark.mp4") },
  { src: videoPath("gremlin.mp4") },
  { src: videoPath("genius.mp4") },
  { src: videoPath("airplane.mp4") },
  { src: videoPath("cubo.mp4") },
  { src: videoPath("aquario.mp4") },
  { src: videoPath("lata.mp4") }
]

export default videos
