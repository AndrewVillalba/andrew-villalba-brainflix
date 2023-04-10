import Main from '../Main/Main';
import '../VideoDetails/VideoDetails.scss';
import likesSvg from '../../assets/images/likes.svg';
import viewsSvg from '../../assets/images/views.svg';

function VideoDetails({selectedVideo}) {
    const {title, channel, timestamp, description, likes, views} = selectedVideo;

    const date = new Date(timestamp).toLocaleDateString();

    return (
        <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div className='video-info'>
          <div className='video-info-top'>
            <p className='video-info-top__author'>{channel}</p>
            <div className='video-info-top-views'>
              <img src={viewsSvg} alt="views-svg" className='video-info-top-views__img'/>
              <p className='video-info-top-views__viewcount'>{views}</p>
            </div> 
          </div>
          <div className='video-info-bottom'>
            <p className='video-info-bottom__date'>{date}</p>
            <div className='video-info-bottom-likes'>
              <img src={likesSvg} alt="likes-svg" className='video-info-bottom-likes__img'/>
              <p className='video-info-bottom-likes__likecount'>{likes}</p>
            </div>
          </div> 
        </div>
         <p className='video__desc'>{description}</p>
        </div>
    )
}

export default VideoDetails;