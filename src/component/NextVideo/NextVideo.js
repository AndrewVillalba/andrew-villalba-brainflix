import NextVideoItem from '../../component/NextVideoItem/NextVideoItem'


function NextVideo({clickHandler, videos}){
    return (
        <section className='next-video'>
            {
                videos && videos.map(video => (
                    <NextVideoItem key={video.id} video={video} clickHandler={clickHandler}/>
                ))
            }
        </section>
    )
}

export default NextVideo;