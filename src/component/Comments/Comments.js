import '../Comments/Comments.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg'
import CommentCard from '../CommentCard/CommentCard.js'


function Comments({video}){

    return (
        <div className='comment-section'>
            <p className='comment-section__number'>3 Comments</p>
            <div className='input'>
                <img className='input-img' src={mohan}></img>
                <div className='input-wrapper'>
                    <form className='input-wrapper'>
                        <div className='text-wrapper'>
                            <label className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</label>
                            <textarea className='input-wrapper__text' placeholder='Add a new comment' required name='text'></textarea>
                            <label htmlFor='submit' ></label>
                        </div>
                        
                        <button name='submit' className='input-wrapper__submit'>COMMENT</button>
                    </form>
                </div>   
            </div>
            <CommentCard comments={video.comments[0]}/>
            <CommentCard comments={video.comments[1]}/>
            <CommentCard comments={video.comments[2]}/>
        </div>
    )
}

export default Comments;