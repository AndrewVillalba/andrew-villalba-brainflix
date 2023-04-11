import NextVideoItem from '../../component/NextVideoItem/NextVideoItem'
import '../NextVideo/NextVideo.scss'


function NextVideo({clickHandler, videos}){
    return (
        <section className='next-videos'>
            {
                videos && videos.map(video => (
                    <NextVideoItem key={video.id} video={video} clickHandler={clickHandler}/>
                ))
            }
        </section>
    )
}

export default NextVideo;