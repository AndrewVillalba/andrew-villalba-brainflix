import NextVideoItem from '../NextVideoItem/NextVideoItem'
import '../NextVideos/NextVideos.scss'


function NextVideos({videos}){
    return (
        <section className='next-videos'>
            <h3 className="next-videos__header">NEXT VIDEOS</h3>
            {
                videos.map(video => (
                    <NextVideoItem key={video.id} video={video}/>
                ))
            }
        </section>
    )
}

export default NextVideos;