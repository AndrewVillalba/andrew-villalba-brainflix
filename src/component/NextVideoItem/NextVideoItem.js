import '../NextVideoItem/NextVideoItem.scss'

function NextVideoItem({clickHandler, video}) {
    return (
        <div onClick={() => clickHandler(video.id)}>
            <img className='next-video' src={video.image}></img>
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
        </div>
    )
}

export default NextVideoItem;