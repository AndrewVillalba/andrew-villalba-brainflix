import '../CommentCard/CommentCard.scss'


function CommentCard({comments}){
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper-top'>
                        <p className='comment-card-wrapper-top__name'>{comments.name}</p>
                        <p className='comment-card-wrapper-top__date'>{new Date(comments.timestamp).toLocaleDateString()}</p>
                    </div>
                    <p className='comment-card-wrapper__comment'>{comments.comment}</p>
                </div>
            </div>
            
    )
}

export default CommentCard;