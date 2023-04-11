import '../Comments/Comments.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg'
import CommentCard from '../CommentCard/CommentCard.js'


function Comments({videos}){
    return (
        <div className='comment-section'>
            <div className='input'>
                <img className='input-img' src={mohan}></img>
                <div className='input-wrapper'>
                    <form className='input-wrapper'>
                        <label className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</label>
                        <textarea className='input-wrapper__text' placeholder='Add a new comment' required name='text'></textarea>
                        <label htmlFor='submit' ></label>
                        <button name='submit' className='input-wrapper__submit'>COMMENT</button>
                    </form>
                </div>
            </div>
            <CommentCard comments={videos.comments[0]}/>
            <CommentCard comments={videos.comments[1]}/>
            <CommentCard comments={videos.comments[2]}/>
        </div>
    )
}

export default Comments;