import '../NextVideoItem/NextVideoItem.scss'

function NextVideoItem({clickHandler, video}) {
    return (
        <div className='next-video' onClick={() => clickHandler(video.id)}>
            <img className='next-video__thumbnail' src={video.image}></img>
            <div className='next-video-wrapper'>
                <h3 className='next-video-wrapper__title'>{video.title}</h3>
                <p className='next-video-wrapper__channel'>{video.channel}</p>
            </div>
        </div>
    )
}

export default NextVideoItem;