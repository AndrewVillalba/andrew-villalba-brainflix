import "./Hero.scss";
import viewsSvg from '../../assets/images/views.svg';
import likesSvg from '../../assets/images/likes.svg';


function Hero() {
    return (
        <main className='video'>
        <h1 className='video-title'>BMX Rampage: 2021 Highlights</h1>
        <div className='video-info'>
          <div className='video-info-top'>
            <p className='video-info-top__author'>By Red Crow</p>
            <div className='video-info-top-views'>
              <img src={viewsSvg} alt="views-svg" className='video-info-top-views__img'/>
              <p className='video-info-top-views__viewcount'>1</p>
            </div> 
          </div>
          <div className='video-info-bottom'>
            <p className='video-info-bottom__date'>07/11/2021</p>
            <div className='video-info-bottom-likes'>
              <img src={likesSvg} alt="likes-svg" className='video-info-bottom-likes__img'/>
              <p className='video-info-bottom-likes__likecount'>23</p>
            </div>
          </div> 
        </div>
         <p className='video__desc'>On a gusty day in Southern Utah, a group of 25
              daring mountain bikers blew the doors off what
              is possible on two wheels, unleashing some of
              the biggest moments the sport has ever seen.
              While mother nature only allowed for one full run
              before the conditions made it impossible to ride,
              that was all that was needed for event veteran
              Kyle Strait, who won the event for the second
              time -- eight years after his first Red Cow
              Rampage title
          </p>
      </main>
    )
}

export default Hero