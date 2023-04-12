import axios from 'axios';
import "./Main.scss";
import Header from '../../component/Header/Header';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import videoDetails from '../../data/video-details.json'
import VideoDetails from '../../component/VideoDetails/VideoDetails'
import videos from '../../data/videos.json'
import { useState } from "react";
import NextVideos from "../NextVideos/NextVideos";
import Comments from '../Comments/Comments';

// const api = "https://project-2-api.herokuapp.com/";
// const apiKey = "?api_key=455c80ec-91e0-48c5-a08b-7d12531971ac";
// const videos = "videos/";
// const videosId = "videos/";



function Main() {

  // const getVideos = () => {
  //   axios.get(api + videos +  apiKey)
  //   .then(res => {
  //     console.log(res.data.id)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0])

  const videoClick = (videoId) => {
    const foundVideo = videoDetails.find(video => video.id === videoId)
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videos.filter(video => video.id !== selectedVideo.id)

    return (

        <main>
          {/* <div>
            <button onClick={getVideos}>Show Video Info</button>
          </div> */}
          <Header />
          <VideoPlayer selectedVideo={selectedVideo}/>
          <VideoDetails selectedVideo={selectedVideo}/>
          <Comments videos={selectedVideo}/>
          <NextVideos clickHandler={videoClick} videos={filteredVideos}/>
        </main>
    )
}

export default Main