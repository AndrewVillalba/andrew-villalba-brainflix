// import { useState } from 'react';
import '../VideoPlayer/VideoPlayer.scss'




function VideoPlayer({selectedVideo}) {
    return(
        <video className="videoPlayer" controls poster={selectedVideo && selectedVideo.image}></video>
    )
}

export default VideoPlayer;