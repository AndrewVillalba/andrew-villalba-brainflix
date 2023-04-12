// import { useState } from 'react';
import '../VideoPlayer/VideoPlayer.scss'




function VideoPlayer({selectedVideo}) {
    return(
        <div className='player-wrapper'>
            <div className="player-wrapper__player--bg">
                <video className="player-wrapper__player" controls poster={selectedVideo && selectedVideo.image}></video>
            </div>
        </div>

    )
}

export default VideoPlayer;