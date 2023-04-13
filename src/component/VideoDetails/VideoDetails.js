import Main from '../Main/Main';
import '../VideoDetails/VideoDetails.scss';
import likesSvg from '../../assets/images/likes.svg';
import viewsSvg from '../../assets/images/views.svg';

function VideoDetails({selectedVideo}) {
    const {title, channel, timestamp, description, likes, views} = selectedVideo;

    const date = new Date(timestamp).toLocaleDateString();

    return (
        <div className='video-text'>
        <div >
          <h1 className='video__title'>{title}</h1>
        </div>
        <div className='video-info'>
          <div className='video-info-left'>
            <p className='video-info-left__author'>By {channel}</p>
            <p className='video-info-left__date'>{date}</p>
          </div>
          <div className='video-info-right'>
            <div className='video-info-right-views'>
              <img src={viewsSvg} alt="views-svg" className='video-info-right-views__img'/>
              <p className='video-info-right-views__viewcount'>{views}</p>
            </div> 
            <div className='video-info-right-likes'>
              <img src={likesSvg} alt="likes-svg" className='video-info-right-likes__img'/>
              <p className='video-info-right-likes__likecount'>{likes}</p>
            </div>
          </div> 
        </div>
         <p className='video__desc'>{description}</p>
        </div>
    )
}

export default VideoDetails;