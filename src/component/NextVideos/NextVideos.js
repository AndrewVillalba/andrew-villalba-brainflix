import NextVideoItem from '../NextVideoItem/NextVideoItem'
import '../NextVideos/NextVideos.scss'


function NextVideos({clickHandler, videos}){
    return (
        <section className='next-videos'>
            <h3 className="next-videos__header">NEXT VIDEOS</h3>
            {
                videos && videos.map(video => (
                    <NextVideoItem key={video.id} video={video} clickHandler={clickHandler}/>
                ))
            }
        </section>
    )
}

export default NextVideos;