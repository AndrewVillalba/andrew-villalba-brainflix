import axios from 'axios';
import "./Main.scss";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDetails from '../../component/VideoDetails/VideoDetails'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NextVideos from "../../component/NextVideos/NextVideos";
import Comments from '../../component/Comments/Comments';

const api = "http://localhost:8080";


function Main() {


  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);

  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)

  useEffect(() => {
    axios.get(api + '/videos')
        .then(res => {
            setVideos(res.data);
        })
  }, [])

  const [video, setVideo] = useState(null)

  useEffect(() => {
    if(videoIdDisplayed === null){
        return;
    }
    axios.get(api + `/videos/${videoIdDisplayed}`)
        .then(response => {
            setVideo(response.data);
        })
  }, [videoIdDisplayed])

  if(video=== null) {
    return <div className='loader-wrapper'><div className='loader'></div></div>
  } 


    return (

        <main>
          <VideoPlayer video={video}/>
          <div className='desktop-bottom'>
          <div className='desktop-bottom-left'>
            <VideoDetails video={video}/>
            <Comments video={video}/>
          </div>
            <NextVideos videos={filteredVideos}/>
          </div>
        </main>
    )
}

export default Main