import "./Main.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import videoDetails from '../../data/video-details.json'
import VideoDetails from '../../component/VideoDetails/VideoDetails'
import videos from '../../data/videos.json'
import { useState } from "react";
import NextVideo from "../NextVideo/NextVideo";
import Comments from '../Comments/Comments'


function Main() {

  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0])

  const videoClick = (videoId) => {
    const foundVideo = videoDetails.find(video => video.id === videoId)
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videos.filter(video => video.id !== selectedVideo.id)

    return (

        <main>
          <VideoPlayer selectedVideo={selectedVideo}/>
          <VideoDetails selectedVideo={selectedVideo}/>
          <Comments videos={selectedVideo}/>
          <NextVideo clickHandler={videoClick} videos={filteredVideos}/>
          
        </main>
    )
}

export default Main